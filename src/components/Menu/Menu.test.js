import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Menu component', () => {
    const wrapper = shallow(<Menu

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
