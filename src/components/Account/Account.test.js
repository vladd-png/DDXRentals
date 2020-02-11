import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';
import { shallow } from 'enzyme';

describe('Account', () => {
  let mockUserInfo, mockFavorites;

  beforeEach(() => {
    mockUserInfo = { email: 'ipitythefool@aol.com', name: 'Mr. T', value: 'Business' };
    mockFavorites = {
      about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
      id: 590,
      listings: ["/api/v1/listings/3", "/api/v1/listings/44", "/api…"],
      location: "North of Downtown Denver",
      name: "River North",
      nickName: "RiNo",
    }
  });

  it('should be an instance of Account component', () => {
    const wrapper = shallow(<Account
        userData = {mockUserInfo}
        favorites = {[mockFavorites]}
      />);
      expect(wrapper).toMatchSnapshot();
  });

});
