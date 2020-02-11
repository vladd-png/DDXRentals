import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  it('should be an instance of Nav component', () => {
    const mockUserData = {
      check: false,
      email: '',
      name: '',
      validateRouterLink: '',
      value: "business"
    }
    const wrapper = shallow(<Nav
      userData={mockUserData}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
