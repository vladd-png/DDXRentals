import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import { shallow } from 'enzyme';

describe('Map', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Map component', () => {
    const wrapper = shallow(<Map

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
