import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Result from 'Result';

describe('<Result />', () => {
  it('should exist', () => {
    expect(Result).toExist();
  });

  describe('render', () => {
    const props = {
      extract: '<p>Test <b>test</b> test</p>',
      id: 123,
      pageviews: '3232',
      thumbnail: 'test1.jpg',
      title: 'Test No.1',
      url: 'http://test1.com',
    };

    it('should render the result card', () => {
      const result = shallow(
        <Result {...props} />
      );
      const card = result.find('.card');

      expect(card.length).toBe(1);
    });

    it('should render an image with the source provided', () => {
      const result = shallow(
        <Result {...props} />
      );
      const image = result.find('.card__image img');

      expect(image.length).toBe(1);
      expect(image.props().src).toBe(props.thumbnail);
    });

    it('should render the title within a link to the Wikipedia URL', () => {
      const result = shallow(
        <Result {...props} />
      );
      const title = result.find('.card__title a');

      expect(title.length).toBe(1);
      expect(title.props().href).toBe(props.url);
      expect(title.text()).toBe(props.title);
    });

    it('should render the Wikipedia link', () => {
      const result = shallow(
        <Result {...props} />
      );
      const link = result.find('.card__link');

      expect(link.length).toBe(1);
      expect(link.text()).toBe(props.url);
      expect(link.props().href).toBe(props.url);
    });

    it('should render the HTML extract', () => {
      const result = shallow(
        <Result {...props} />
      );
      const snippet = result.find('.card__snippet')
        .render()
        .find('.card__snippet');

      expect(snippet.length).toBe(1);
      expect(snippet.html()).toBe(props.extract);
    });

    it('should render the number of pageviews', () => {
      const result = shallow(
        <Result {...props} />
      );
      const pageviews = result.find('.card__stats span').last();

      expect(pageviews.length).toBe(1);
      expect(pageviews.text()).toBe(`Pageviews: ${props.pageviews}`);
    });
  });
});
