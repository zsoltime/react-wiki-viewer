import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Wrapper from 'Wrapper';
import Nav from 'Nav';

describe('<Wrapper />', () => {
  it('should exist', () => {
    expect(Wrapper).toExist();
  });

  describe('render', () => {
    it('should render a Nav component and children passed to it', () => {
      const wrapper = shallow(
        <Wrapper>
          <div className="test" />
        </Wrapper>
      );
      const testDiv = wrapper.find('.test');

      expect(wrapper.contains(<Nav />)).toBe(true);
      expect(testDiv.length).toBe(1);
    });
  });
});
