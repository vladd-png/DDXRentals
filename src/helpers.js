export const fetchRentalAreaData = areaData => {

  const result = areaData.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(data => data)
      .catch(error => window.alert(`There was an error: ${error}`))
  })
  return result;
}
