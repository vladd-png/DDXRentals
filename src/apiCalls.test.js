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
