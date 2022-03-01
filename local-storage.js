function storeCountriesWithFlags(countries) {
  let countriesList = JSON.stringify(countries);
  localStorage.setItem('countryFlagsList', countriesList);
}

function getCountriesWithFlags() {
  let storeCountries = localStorage.getItem('countryFlagsList');
  return JSON.parse(storeCountries);
}

function clearStorage() {
  localStorage.removeItem('countryFlagsList');
  location.reload();
}
