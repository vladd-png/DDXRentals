import React from 'react';
import ReactDOM from 'react-dom';
import Neighborhood from './Neighborhood';
import { shallow } from 'enzyme';

describe('Neighborhood', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const mockListing = {

    }
    ReactDOM.render(<Neighborhood
      areas={{chosenHood:
        {
          id: 0,
          name: 'Select An Area on the Left to View Full Details',
          location: null,
          about: '',
          listings: ["/api/v1/listings/3921"]
        }
      }}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be an instance of Neighborhood component', () => {
    const wrapper = shallow(<Neighborhood
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
