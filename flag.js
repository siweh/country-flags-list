let countryFlags = document.querySelector('.countries').innerHTML;
let textInputElem = document.querySelector('.text-input');
let addBtn = document.querySelector('.add-btn');

var theTemplate = Handlebars.compile(countryFlags);

const listOfCountries = CountryFlags();

let countryflagList = listOfCountries.getCountryNamesWithFlags();
let newCountry = listOfCountries.getNewCountry();
//console.log(newCountry);
//console.log(countryflagList);

document.querySelector('.flag').innerHTML = theTemplate({
  results: countryflagList,
  newCountry,
});

function clickedAddBtn() {
  let inputResults = textInputElem.value;
  //console.log(inputResults);
  let valueResults = listOfCountries.addNewCountry(inputResults);
  console.log(valueResults);
  let getErrorMsg = listOfCountries.getErrorMessage();
  //console.log(getErrorMsg);
  document.querySelector('.error').innerHTML = theTemplate({
    errors: getErrorMsg,
  });

  setTimeout(() => {
    document.querySelector('.error').innerHTML = '';
  }, 4000);

  textInputElem.value = '';
}

addBtn.addEventListener('click', clickedAddBtn);
