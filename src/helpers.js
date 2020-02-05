
export const fetchRentalAreaData = areaData => {

  return areaData.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => window.alert(`There was an error: ${error}`))
  })

}
