import React from 'react';
import ReactDOM from 'react-dom';
import SmallListingCard from './SmallListingCard';
import { shallow } from 'enzyme';

describe('SmallListingCard', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallListingCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of SmallListingCard component', () => {
    const wrapper = shallow(<SmallListingCard

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
