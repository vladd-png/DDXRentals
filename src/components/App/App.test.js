import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper, mockArea;
  let memoryRouter;

  beforeEach(() => {
    wrapper = shallow(<App />)
    memoryRouter = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  )
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


  it('should be an instance of App component', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should update its areaDetails state', () => {
    wrapper.instance().updateAreaDetails(mockArea);
    expect(wrapper.state('areaDetails')).toEqual(mockArea)
  });

  it('should update state when saveHoodData is invoked', () => {
    wrapper.instance().addHoodData = jest.fn();
    wrapper.instance().addHoodData();
    expect(wrapper.instance().addHoodData).toHaveBeenCalled();
  });

  it('should saveUserData', () => {
    const mockUserInfo = { email: 'icantsee@gmail.com', name: 'Stevie Wonder', value: 'Business' }
    wrapper.instance().saveUserData(mockUserInfo)
    expect(wrapper.state('userData')).toEqual(mockUserInfo)
  });

  it('should update state when addNicknamesToHoodz is invoked', () => {
    wrapper.instance().addAreaNicknameToHoodz = jest.fn();
    wrapper.instance().addAreaNicknameToHoodz();
    expect(wrapper.instance().addAreaNicknameToHoodz).toHaveBeenCalled();
  });

  it('should update state when updateNeighborhoodInfo is invoked', () => {
    const mockZone = 'River North';
    wrapper.instance().updateNeighborhoodInfo = jest.fn();
    wrapper.instance().updateNeighborhoodInfo(mockZone);
    expect(wrapper.instance().updateNeighborhoodInfo).toHaveBeenCalled();
  });

  it('should update state when addFavorite is invoked', () => {
    wrapper.instance().addFavorite = jest.fn();
    wrapper.instance().addFavorite(mockArea);
    expect(wrapper.instance().addFavorite).toHaveBeenCalled();
  })

});
