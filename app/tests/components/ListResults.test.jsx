import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ListResults from 'ListResults';
import Result from 'Result';

describe('<ListResults />', () => {
  it('should exist', () => {
    expect(ListResults).toExist();
  });

  describe('render', () => {
    it('should render the correct number of results', () => {
      const props = [{
        extract: 'Test test test',
        id: 123,
        pageviews: '3232',
        thumbnail: 'test1.jpg',
        title: 'Test No.1',
        url: 'http://test1.com',
      }, {
        extract: 'Test test test',
        id: 234,
        pageviews: '3434',
        thumbnail: 'test2.jpg',
        title: 'Test No.2',
        url: 'http://test2.com',
      }, {
        extract: 'Test test test',
        id: 345,
        pageviews: '2121',
        thumbnail: 'test3.jpg',
        title: 'Test No.3',
        url: 'http://test.com',
      }];
      const listResults = shallow(
        <ListResults results={props} />
      );
      const results = listResults.find(Result);

      expect(listResults.contains(<Result {...props[0]} />)).toBe(true);
      expect(results.length).toBe(props.length);
    });
  });
});
