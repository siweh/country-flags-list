describe('Country flag list', function () {
  const countryFlags = CountryFlags();
  it('should get the country with its flag', function () {
    assert.deepEqual(
      [
        'Argentina 🇦🇷',
        'Brazil 🇧🇷',
        'Chile 🇨🇱',
        'Ireland 🇮🇪',
        'Malawi 🇲🇼',
        'Rwanda 🇷🇼',
        'South Africa 🇿🇦',
        'Switzerland 🇨🇭',
        'Uganda 🇺🇬',
        'Zambia 🇿🇲',
      ],
      countryFlags.getCountryNamesWithFlags()
    );
  });

  it('should display an error message saying please enter a country', function () {
    countryFlags.addNewCountry('');
    assert.equal('Please enter a country!', countryFlags.getErrorMessage());
  });

  //   it('should to get a new country', function () {
  //     let newCountry = countryFlags.addNewCountry('India');
  //     assert.equal('india', newCountry);
  //   });
});
