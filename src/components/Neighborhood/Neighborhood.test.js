import React from 'react';
import ReactDOM from 'react-dom';
import Neighborhood from './Neighborhood';
import { shallow } from 'enzyme';
import { mockRandom } from 'jest-mock-random';

describe('Neighborhood', () => {

  let mockAreas;

  beforeEach(() => {
    mockRandom([0.1]);
  });

  it('should be an instance of Neighborhood component', () => {
    mockAreas = {
        id: 0,
        name: 'Select An Area on the Left to View Full Details',
        location: null,
        about: '',
        listings: ['/api/v1/listings/3921']
      }
    const wrapper = shallow(<Neighborhood
      areas={mockAreas}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
