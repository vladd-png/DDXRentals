import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';
import { shallow } from 'enzyme';

describe('Account', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Account />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Account component', () => {
    const wrapper = shallow(<Account
        
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
