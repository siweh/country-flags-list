let countryFlags = document.querySelector('.countries').innerHTML;
let textInputElem = document.querySelector('.text-input');
let addBtn = document.querySelector('.add-btn');
let newCountries = document.querySelector('.newCountries');

//
let storeCountryList = getCountriesWithFlags();

var theTemplate = Handlebars.compile(countryFlags);

//Store the list of counties in localstorage
const listOfCountries = CountryFlags(storeCountryList);

let countryflagList = listOfCountries.getCountryNamesWithFlags();
//console.log(countryflagList);

document.querySelector('.flag').innerHTML = theTemplate({
  results: countryflagList,
});
function clickedAddBtn() {
  let inputResults = textInputElem.value;
  console.log(inputResults);
  let getErrorMsg = listOfCountries.getErrorMessage();
  //console.log(getErrorMsg);
  document.querySelector('.error').innerHTML = theTemplate({
    errors: getErrorMsg,
  });

  let resultsOfCountry = listOfCountries.addNewCountry(inputResults);
  console.log(resultsOfCountry);
  newCountries = theTemplate({
    addedCountry: resultsOfCountry,
  });

  setTimeout(() => {
    document.querySelector('.error').innerHTML = '';
  }, 4000);

  storeCountriesWithFlags(listOfCountries.getCountryNamesWithFlags());

  textInputElem.value = '';
}

addBtn.addEventListener('click', clickedAddBtn);
