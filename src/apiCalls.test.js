import { getListings, updateListingState } from './apiCalls.js';

describe('getListings', () => {
  let mockResponse = [{
      area: "RiNo",
      details: '/api/v1/areas/590'
    },
    {
      area: "Park Hill",
      details: '/api/v1/areas/751'
    },
    {
      area: "LoHi",
      details: '/api/v1/areas/408'
    },
    {
      area: "Cap Hill",
      details: '/api/v1/areas/240'
    }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getListings();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas');
  });

  it('HAPPY: should return an array of ideas', () => {
    expect(getListings()).resolves.toEqual(mockResponse)
  });

  it('SAD: should return an error if ok is false', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getListings()).rejects.toEqual(Error('Error while fetching.'))
  });

  it('SAD: should return an error if Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching.'))
    })
    expect(getListings()).rejects.toEqual(Error('Error while fetching.'))
  })

});



  describe('updateListingState', () => {
    let mockResponse = [{
        listing_id: 3,
        area_id: 590,
        name: "Hip RiNo Party Spot",
        address: {
          street: "2250 Lawrence St",
          zip: "80205"
        },
        details: {
          neighborhood_id: 5124122,
          superhost: true,
          seller_source: "91jss1",
          beds: 3,
          baths: 2.5,
          cost_per_night: 420,
          features: [
            "hot tub",
            "espresso machine"
          ],
        },
        dev_id: "u4gh2j",
        area: "rino",
        db_connect: 834470
      }]

