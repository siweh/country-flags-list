let countryFlags = document.querySelector('.countries').innerHTML;
let textInputElem = document.querySelector('.addCountry');
let searchCountryElem = document.getElementById('searchCountry');
let searchBtn = document.querySelector('.search-btn');
let addBtn = document.querySelector('.add-btn');
let sortingBtn = document.querySelector('.sortCountries');
let resetBtn = document.querySelector('.resetCountries');
let newCountries = document.querySelector('.newCountries');

var theTemplate = Handlebars.compile(countryFlags);

let storeCountryList = getCountriesWithFlags();

//Store the list of counties in localstorage
const listOfCountries = CountryFlags(storeCountryList);

let countryflagList = listOfCountries.getCountriesWithFlags();
//console.log(countryflagList);

document.querySelector('.flag').innerHTML = theTemplate({
  results: countryflagList,
});
function clickedAddBtn() {
  let inputResults = textInputElem.value;
  //console.log(inputResults);

  let resultsOfCountry = listOfCountries.addNewCountry(inputResults);
  //console.log(resultsOfCountry);

  document.querySelector('.flag').innerHTML = theTemplate({
    addedCountry: resultsOfCountry,
  });

  setTimeout(() => {
    document.querySelector('.error').innerHTML = '';
  }, 4000);

  let getErrorMsg = listOfCountries.getErrorMessage();
  //console.log(getErrorMsg);
  document.querySelector('.error').innerHTML = theTemplate({
    errors: getErrorMsg,
  });

  storeCountriesWithFlags(listOfCountries.addNewCountry());

  textInputElem.value = '';
}

function sortingCountriesAlphabetically() {
  let countrySort = listOfCountries.sortCountriesByName();
  console.log(countrySort);
  document.querySelector('.flag').innerHTML = theTemplate({
    results: countrySort,
  });
}
function clickedSearchBtn() {
  let searchInput = searchCountryElem.value;
  console.log(searchInput);
  let searchedCountry = listOfCountries.searchByCountryNames(searchInput);
  console.log(searchedCountry);
  document.querySelector('.flag').innerHTML = theTemplate({
    results: searchedCountry,
  });
}

function resetCountries() {
  document.querySelector('.flag').innerHTML = listOfCountries.resetCountries();
  clearStorage();
}

addBtn.addEventListener('click', clickedAddBtn);
sortingBtn.addEventListener('click', sortingCountriesAlphabetically);
searchBtn.addEventListener('click', clickedSearchBtn);
resetBtn.addEventListener('click', resetCountries);
