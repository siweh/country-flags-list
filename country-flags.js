function CountryFlags(countries = []) {
  let countryWithFlags = countries !== null ? countries : [];
  let errorMessage = '';

  //console.log(countryWithFlags);
  var regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

  const countryNames = [
    'Argentina',
    'Brazil',
    'Chile',
    'Zambia',
    'Uganda',
    'Malawi',
    'Rwanda',
    'Ireland',
    'Switzerland',
    'South Africa',
  ];

  const flags = ['🇦🇷', '🇧🇷', '🇨🇱', '🇿🇲', '🇺🇬', '🇲🇼', '🇷🇼', '🇮🇪', '🇨🇭', '🇿🇦'];

  function getCountryNamesWithFlags() {
    countryWithFlags = countryNames.map((country) => {
      //console.log(country);
      let indexOfCountry = countryNames.indexOf(country);
      //console.log(indexOfCountry);
      return country + ' ' + flags[indexOfCountry];
    });
    return countryWithFlags;
  }
  function addNewCountry(countryName) {
    if (countryName !== null) {
      countryWithFlags.push(countryName);
    }
    if (countryName === '') {
      errorMessage = 'Please enter a country!';
    }

    return countryWithFlags;
  }

  function sortCountriesByName() {
    let sortedCountries = countryWithFlags.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (b < a) {
        return 1;
      }
      return 0;
    });
    console.log(sortedCountries);
    return sortedCountries;
  }

  function searchByCountryNames(name) {
    //console.log(countryWithFlags);
    const searchedResults = countryWithFlags.filter((element) => {
      return element?.toLowerCase().includes(name?.toLowerCase());
    });
    console.log(searchedResults);
    return searchedResults;
  }

  function getCountriesWithFlags() {
    return countryWithFlags;
  }

  function getErrorMessage() {
    return errorMessage;
  }

  function resetCountries() {
    let reset = getCountriesWithFlags();
    reset = '';
    location.reload();
    return reset;
  }
  return {
    getCountryNamesWithFlags,
    getCountriesWithFlags,
    addNewCountry,
    getErrorMessage,
    resetCountries,
    searchByCountryNames,
    sortCountriesByName,
  };
}
