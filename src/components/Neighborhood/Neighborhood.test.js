import React from 'react';
import ReactDOM from 'react-dom';
import Neighborhood from './Neighborhood';
import { shallow } from 'enzyme';

describe('Neighborhood', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Neighborhood />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Neighborhood component', () => {
    const wrapper = shallow(<Neighborhood

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
