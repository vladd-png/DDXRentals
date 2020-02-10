import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav
      {{userData={
        check: false,
        email: '',
        name: '',
        validateRouterLink: '',
        value: "business"
      }}}
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Nav component', () => {
    const wrapper = shallow(<Nav

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
