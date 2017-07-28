import React, { Component } from 'react';

import ListResults from 'ListResults';
import SearchForm from 'SearchForm';
import Spinner from 'Spinner';
import appendParams from '../utils/url';

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      query: undefined,
      results: [],
      suggestions: [],
      isLoading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }
  // handleAutosuggestClick(text) {
  //   SearchForm.search = text + '555';
  // }
  handleInputChange(q) {
    const query = q.trim();
    if (query.length < 2) {
      this.setState({
        query: undefined,
        suggestions: [],
      });
    } else {
      this.setState({ query });
      this.fetchAutocompleteResults(query);
    }
  }
  handleSubmit(q) {
    const query = q.trim();

    if (!query) {
      this.setState({
        query: undefined,
        results: [],
      });
    } else {
      this.setState({ query });
      this.fetchResults(query);
    }
  }
  fetchResults(q) {
    if (!q) { return null; }

    this.setState({ isLoading: true });

    const options = {
      action: 'query',
      format: 'json',
      origin: '*',
      errorformat: 'html',
      prop: 'images|imageinfo|info|links|pageimages|pageviews|extracts',
      list: 'search',
      meta: '',
      indexpageids: 1,
      generator: 'search',
      formatversion: 2,
      imlimit: 1,
      iiprop: 'url|size',
      inprop: 'url',
      plnamespace: 0,
      pllimit: 10,
      pldir: 'ascending',
      piprop: 'thumbnail|name|original',
      pithumbsize: 500,
      pilimit: 50,
      pilicense: 'any',
      pvipmetric: 'pageviews',
      pvipdays: 7,
      exsentences: 2,
      exlimit: 20,
      exintro: 1,
      exsectionformat: 'plain',
      srsearch: q,
      srlimit: 10,
      srqiprofile: 'wsum_inclinks_pv',
      srinfo: 'totalhits|rewrittenquery',
      srprop: 'wordcount|timestamp|snippet|titlesnippet',
      gsrsearch: q,
      gsrlimit: 10,
      gsrinfo: 'totalhits|rewrittenquery',
      gsrprop: 'wordcount|timestamp|snippet|titlesnippet',
    };
    const url = appendParams('https://en.wikipedia.org/w/api.php', options);

    return fetch(url)
      .then(res => res.json())
      .then(({ query }) => {
        const sortedPages = query.pages.sort((a, b) => a.index > b.index);

        const pages = sortedPages.map(page => ({
          index: page.index,
          id: page.pageid,
          title: page.title,
          url: page.fullurl,
          extract: page.extract,
          thumbnail: page.thumbnail ? page.thumbnail.source : 'images/wiki.svg',
          pageviews: page.pageviews ?
            Object.keys(page.pageviews).reduce((views, key) => (
              views + page.pageviews[key]
            ), 0).toLocaleString() :
            'Unknown',
          lastupdate: page.touched,
          links: page.links,
        }));

        return {
          pages,
          search: query.search,
        };
      })
      .then(results => this.setState({
        results: results.pages,
        isLoading: false,
      }));
  }
  fetchAutocompleteResults(q) {
    this.setState({ isLoading: true });

    const options = {
      action: 'opensearch',
      limit: 5,
      format: 'json',
      origin: '*',
      search: q,
    };
    const url = appendParams('https://en.wikipedia.org/w/api.php', options);

    return fetch(url)
      .then(res => res.json())
      .then(res => (
        res[1].reduce((acc, curr, i) => ([
          ...acc,
          {
            title: curr,
            text: res[2][i],
            link: res[3][i],
          }]), [])
      ))
      .then(suggestions => this.setState({
        suggestions,
        isLoading: false,
      }));
  }
  render() {
    const renderResults = () => {
      let content = null;
      if (this.state.isLoading) {
        content = <Spinner />;
      } else if (this.state.results.length > 0) {
        content = <ListResults results={this.state.results} />;
      }
      return content;
    };
    return (
      <div className="content">
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          list={this.state.suggestions}
          onClickEvent={this.handleAutosuggestClick}
        />
        <div className="main">
          {renderResults()}
        </div>
      </div>
    );
  }
}

export default Viewer;
