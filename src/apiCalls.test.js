import { getListings, updateListingState, fetchAreaListings } from './apiCalls.js';

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

  it('HAPPY: should return an array of neighborhood data', () => {
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

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct url', () => {
      updateListingState();
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings');
    });

    it('HAPPY: should return an array of lisiting data', () => {
      expect(updateListingState()).resolves.toEqual(mockResponse)
    });

    it('SAD: should return an error if ok is false', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(updateListingState()).rejects.toEqual(Error('Error while updating.'))
    });

    it('SAD: should return an error if Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error while updating.'))
      })
      expect(updateListingState()).rejects.toEqual(Error('Error while updating.'))
    })
});



describe('fetchRentalAreaData', () => {
  let mockResponse = [{
      id: 751,
      name: "Park Hill",
      location: "East of Downtown Denver",
      about: "Park Hill features one of the best views of the downtown area and surrounding mountains. With easy access to City Park and the major highways, Park Hill also includes many unique styles of homes.",
      region_code: 6648386,
      quick_search: "g1m0tsxzl0o0",
      listings: [
        '/api/v1/listings/3921',
        '/api/v1/listings/56',
        '/api/v1/listings/21',
      ]
    }]

    let mockAreaData = {
      area: "Park Hill",
      details: '/api/v1/areas/751'
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct url', () => {
      fetchAreaListings(mockAreaData.details);
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas/751');
    });

    it('HAPPY: should return an array of all listings for that neighborhood', () => {
      expect(fetchAreaListings(mockAreaData)).resolves.toEqual(mockResponse)
    });

    it('SAD: should return an error if ok is false', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(fetchAreaListings()).rejects.toEqual(Error('Error while fetching.'))
    });

    it('SAD: should return an error if Promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error while fetching.'))
      })
      expect(fetchAreaListings()).rejects.toEqual(Error('Error while fetching.'))
    })

})
