import React from 'react';
import ReactDOM from 'react-dom';
import Snowflake from './Snowflake';
import { shallow } from 'enzyme';

describe('Snowflake', () => {

  it('should be an instance of Snowflake', () => {
    const wrapper = shallow(<Snowflake />);
    expect(wrapper).toMatchSnapshot();
  });

});
