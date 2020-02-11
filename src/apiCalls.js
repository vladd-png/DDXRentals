export const getListings = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => {
      if(!response.ok) {
        throw Error('Error while fetching.')
      }
      return response.json()
    })
}

export const updateListingState = () => {
  return fetch('http://localhost:3001/api/v1/listings')
    .then(response => {
      if(!response.ok) {
        throw Error('Error while updating.')
      }
      return response.json()
    })
}

export const fetchAreaListings = details => {
  return fetch(`http://localhost:3001${details}`)
   .then(response => {
     if(!response.ok) {
       throw Error('Error while fetching.')
     }
     return response.json()
   })
}
