function CountryFlags(countryFlagList = []) {
  const countries = [
    'Argentina',
    'Brazil',
    'Chile',
    'Zambia',
    'Uganda',
    'Malawi',
    'Rwanda',
    'Ireland',
    'Switzerland',
  ];
  countries.sort();

  const flags = ['🇦🇷', '🇧🇷', '🇨🇱', '🇿🇲', '🇺🇬', '🇲🇼', '🇷🇼', '🇮🇪', '🇨🇭'];
  flags.sort();

  let countryWithFlags = countryFlagList !== null ? countryFlagList : [];
  let errorMessage = '';

  function getCountryNamesWithFlags() {
    countryWithFlags = countries.map((country) => {
      //console.log(country);
      let indexOfCountry = countries.indexOf(country);
      //console.log(indexOfCountry);
      //console.log(country + ' ' + flags[indexOfCountry]);
      return country + ' ' + flags[indexOfCountry];
    });
    return countryWithFlags;
  }

  function addNewCountry(country) {
    if (countryWithFlags.includes(country)) {
      errorMessage = 'Country already exists';
    } else if (country === Number) {
      errorMessage = 'Country must be in alphabets only';
    } else if (country === '') {
      errorMessage = 'Please enter a country!';
    } else {
      countryWithFlags.push(country);
    }
  }

  function getNewCountry() {
    console.log(countryWithFlags);
    return countryWithFlags;
  }

  function getErrorMessage() {
    return errorMessage;
  }
  return {
    getCountryNamesWithFlags,
    addNewCountry,
    getNewCountry,
    getErrorMessage,
  };
}
