import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Viewer from 'Viewer';
import SearchForm from 'SearchForm';
import Spinner from 'Spinner';
import ListResults from 'ListResults';

describe('<Viewer />', () => {
  it('should exist', () => {
    expect(Viewer).toExist();
  });

  describe('render', () => {
    it('should render a SearchForm component', () => {
      const viewer = shallow(<Viewer />);
      const searchForm = viewer.find(SearchForm);

      expect(searchForm.length).toBe(1);
    });

    it('should render a Spinner component when fetching results', (done) => {
      const viewer = shallow(<Viewer />);

      expect(viewer.find(Spinner).length).toBe(0);

      viewer.setState({ isLoading: true }, () => {
        expect(viewer.find(Spinner).length).toBe(1);
        done();
      });
    });

    it('should render a ListResults component when fetching is done', (done) => {
      const viewer = shallow(<Viewer />);

      expect(viewer.find(ListResults).length).toBe(0);

      viewer.setState({
        isLoading: false,
        results: [{}, {}, {}],
      }, () => {
        expect(viewer.find(ListResults).length).toBe(1);
        done();
      });
    });
  });

  describe('handle submit', () => {
    it('should update query state when its called', () => {
      const viewer = shallow(<Viewer />);
      const query = 'Search query';

      expect(viewer.state().query).toBe(undefined);
      viewer.instance().handleSubmit(query);
      expect(viewer.state().query).toBe(query);
    });

    it('should trim query string', () => {
      const viewer = shallow(<Viewer />);
      const query = '   Test query with unnecessary spaces on both end     ';

      expect(viewer.state().query).toBe(undefined);
      viewer.instance().handleSubmit(query);
      expect(viewer.state().query).toNotBe(query);
      expect(viewer.state().query).toBe(query.trim());
    });

    it('should delete query state when called with empty string', () => {
      const viewer = shallow(<Viewer />);
      const query = '';

      expect(viewer.state().query).toBe(undefined);
      viewer.instance().handleSubmit(query);
      expect(viewer.state().query).toBe(undefined);
    });
  });
});
