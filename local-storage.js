function storeCountriesWithFlags(countries, isLocalStorageTest = false) {
  let countriesList = JSON.stringify(countries);
  if (isLocalStorageTest) {
    localStorage.setItem('testStorage', countriesList);
    return; //terminate
  }
  localStorage.setItem('countryFlagsList', countriesList);
}

function getCountriesWithFlags(isLocalStorageTest = false) {
  //For tests
  if (isLocalStorageTest) {
    return JSON.parse(localStorage.getItem('testStorage'));
  }
  let storeCountries = localStorage.getItem('countryFlagsList');
  return JSON.parse(storeCountries);
}

function clearStorage() {
  localStorage.removeItem('countryFlagsList');
  location.reload();
}
