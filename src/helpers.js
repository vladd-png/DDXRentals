import { fetchAreaListings } from './apiCalls.js'

export const fetchRentalAreaData = areaData => {
  const result = areaData.map(area => {
    // fetchAreaListings(area.details)
    return fetch('http://localhost:3001' + area.details)
     .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => error)
  })
  return result;
}
