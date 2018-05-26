const PubSub = require('../helpers/pub_sub.js');

const SelectView = function() {


};

SelectView.prototype.receiveData = function () { //STEP 3
  PubSub.subscribe('CountryData:Country-loaded', (event) => { //listening out for the data
    const data = event.detail; //PUBSUB events are event.detail.
    console.log(data);
    this.populateSelect(data); //STEP 6 //runs the function below with the data.
  });

SelectView.prototype.populateSelect= function(data){ //STEP 5

  const countryNames = data.map((country) => {
    return country.name; //return just the country names in the array.
  })
  const select = document.querySelector('select#all-countries'); //FROM HTML FILE #id <select> IS QUERIED.
  countryNames.forEach((countryName, index) => { //looping through the array
    const option = document.createElement('option'); //creates the HTML element <option>
    option.textContent = countryName; //the content that will be displayed in the drop down in the form of text.
    option.value = index; //the index value of the array differentiates the individual countries
    select.appendChild(option); //option is the child of parent select in html.
  });

};

SelectView.prototype.setUpListenerForUserChoice = function () { //STEP 7.
  const select = document.querySelector('select#all-countries');
  select.addEventListener('change', (event) => {
    console.log('hello', event.target.value);
    const index = event.target.value; //target.value for built-in events.
    PubSub.publish('SelectView:user-choice', index);
  });

};



};

module.exports = SelectView;
