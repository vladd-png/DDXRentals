import React from 'react';
import ReactDOM from 'react-dom';
import ListingContainer from './ListingContainer';
import { shallow } from 'enzyme';

describe('ListingContainer', () => {
  let wrapper, mockAddFavorite, mockArea;

  beforeEach(() => {
    mockArea =  [{
      listing_id: 3, area_id: 590, name: 'Hip RiNo Party Spot',
      address: {
        street: '2250 Lawrence St',
        zip: '80205'
      },
      details: {
        neighborhood_id: 5124122, superhost: true, seller_source: '91jss1', beds: 3, baths: 2.5, cost_per_night: 420, features: [
          'hot tub',
          'espresso machine'
        ],
      },
      dev_id: 'u4gh2j', area: 'rino', db_connect: 834470
    }]
  })

  it('should be an instance of ListingContainer component', () => {
    mockAddFavorite = jest.fn()
    wrapper = shallow(<ListingContainer
        addFavorite={mockAddFavorite}
        listings={mockArea}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
