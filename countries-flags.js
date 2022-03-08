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
    'South Africa',
  ];
  //countries.sort();

  const flags = ['🇦🇷', '🇧🇷', '🇨🇱', '🇿🇲', '🇺🇬', '🇲🇼', '🇷🇼', '🇮🇪', '🇨🇭', '🇿🇦'];
  //flags.sort();

  let countryWithFlags = countryFlagList !== null ? countryFlagList : [];
  let newAddedCountries = [];
  let errorMessage = '';

  function getCountryNamesWithFlags() {
    countryWithFlags = countries.map((country) => {
      //console.log(country);
      let indexOfCountry = countries.indexOf(country);
      //console.log(indexOfCountry);
      //console.log(country + ' ' + flags[indexOfCountry]);
      return country + ' ' + flags[indexOfCountry];
    });
    return countryWithFlags.sort();
  }

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .split('')
      .map((char) => 127397 + char.charCodeAt());
    newAddedCountries.push(String.fromCodePoint(...codePoints));
    return newAddedCountries;
  }
  function addNewCountry(countryName) {
    newAddedCountries.push(countryName);
    // if (countryName.match(regex)) {
    //   newAddedCountries.push(countryName);
    //   country + ' ' + countryName.match(regex);
    // } else {
    //   errorMessage = 'No such country';
    // }
    // if (countryWithFlags.includes(country)) {
    //   errorMessage = 'Country already exists';

    // } else {
    //   countryWithFlags.push(country);
    // }
    if (countryName === Number) {
      errorMessage = 'Country must be in alphabets only';
    }

    if (countryName === '') {
      errorMessage = 'Please enter a country!';
    }
    return newAddedCountries;
  }
  function getErrorMessage() {
    return errorMessage;
  }

  return {
    getCountryNamesWithFlags,
    addNewCountry,
    getFlagEmoji,
    getErrorMessage,
  };
}
