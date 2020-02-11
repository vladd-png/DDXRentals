import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import { shallow } from 'enzyme';

describe('Map', () => {

  let mockUpdateNeighborhoodInfo;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Map component', () => {
    mockUpdateNeighborhoodInfo = jest.fn()
    const wrapper = shallow(<Map
      updateNeighborhoodInfo={mockUpdateNeighborhoodInfo}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
