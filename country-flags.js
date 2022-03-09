function CountryFlags(countries = []) {
  let countryWithFlags = countries !== null ? countries : [];
  let errorMessage = '';

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
    // countryWithFlags.push(countryName);
    // if (countryName.match(regex)) {
    //   newAddedCountries.push(countryName);
    //   country + ' ' + countryName.match(regex);
    // } else {
    //   errorMessage = 'No such country';
    // }
    if (countryWithFlags.includes(countryName)) {
      errorMessage = 'Country already exists';
    } else {
      countryWithFlags.push(countryName);
    }
    if (typeof countryName == 'number') {
      errorMessage = 'Country must be in alphabets only';
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
    return sortedCountries;
  }

  function searchByCountryNames(name) {
    const searchedResults = countryWithFlags.filter((element) =>
      element.includes(name)
    );
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
