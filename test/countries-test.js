describe('Country flag list', function () {
  const countryFlags = CountryFlags();
  it('should get the country with its flag', function () {
    var isLocalStorage = true;
    storeCountriesWithFlags(
      ['Argentina 🇦🇷', 'South Africa 🇿🇦'],
      isLocalStorage
    );
    assert.deepEqual(
      ['Argentina 🇦🇷', 'South Africa 🇿🇦'],
      getCountriesWithFlags(isLocalStorage)
    );
    //clearStorage();
  });

  it('should be able to add a new country', function () {
    countryFlags.addNewCountry('India 🇮🇳');
    assert.deepEqual(['India 🇮🇳'], countryFlags.getCountriesWithFlags());
  });

  it('should display an error message saying please enter a country', function () {
    countryFlags.addNewCountry('');
    assert.equal('Please enter a country!', countryFlags.getErrorMessage());
  });
});
