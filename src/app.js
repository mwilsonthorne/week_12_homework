//SET UP
const CountriesData = require('./models/countries_data.js');
const SelectView = require('./views/select_view.js');
const CountryInfo = require('./views/country_info.js');



document.addEventListener('DOMContentLoaded', () => {

  console.log('dom loaded');

  const selectView = new SelectView(); //STEP 4
  selectView.receiveData();
  selectView.setUpListenerForUserChoice(); //STEP 8.
  console.log(selectView);

   const countriesData = new CountriesData(); //STEP 2
   countriesData.getData();
   countriesData.setUpListenerForUserChoice();//STEP 10.
   console.log(countriesData);

   const countryInfo = new CountryInfo(); //STEP 15
   countryInfo.setUpListenerForSelectedObject();
   console.log(countryInfo);





});
