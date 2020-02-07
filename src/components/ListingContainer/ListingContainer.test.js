import React from 'react';
import ReactDOM from 'react-dom';
import ListingContainer from './ListingContainer';
import { shallow } from 'enzyme';

describe('ListingContainer', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListingContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of ListingContainer component', () => {
    const wrapper = shallow(<ListingContainer

      />);
      expect(wrapper).toMatchSnapshot();
  });

});
