import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import SearchForm from 'SearchForm';

describe('<SearchForm />', () => {
  it('should exist', () => {
    expect(SearchForm).toExist();
  });

  describe('render', () => {
    it('should render search form with an input and a submit button', () => {
      const searchForm = shallow(
        <SearchForm handleSubmit={f => f} />
      );
      const form = searchForm.find('.search-form');
      const input = searchForm.find('.search-form__field');
      const button = searchForm.find('button.search-form__btn');

      expect(form.length).toBe(1);
      expect(input.props().type).toBe('search');
      expect(button.props().type).toBe('submit');
    });
  });

  describe('handle form submit', () => {
    it('should call callback function with the input value on form submit', () => {
      const spy = expect.createSpy();
      const searchForm = mount(
        <SearchForm handleSubmit={spy} />
      );
      const input = searchForm.find('.search-form__field');
      const inputFieldValue = 'test';

      input.node.value = inputFieldValue;
      searchForm.simulate('submit');

      expect(spy).toHaveBeenCalledWith(inputFieldValue);
    });
  });

  describe('random article button', () => {
    it('should render a "random article" button', () => {
      const searchForm = shallow(
        <SearchForm handleSubmit={f => f} />
      );
      const link = searchForm.find('a.search-form__btn');
      const randomWikiURL = 'https://en.wikipedia.org/wiki/Special:Random';

      expect(link.length).toBe(1);
      expect(link.props().href).toBe(randomWikiURL);
    });
  });
});
