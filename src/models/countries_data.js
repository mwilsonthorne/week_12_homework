const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const CountriesData = function () {




};

CountriesData.prototype.getData = function () { //STEP 1
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    // console.log(data);
    // console.log('pop', this.randomCountry.population);
    PubSub.publish('CountryData:Country-loaded', data);

  });

};

CountriesData.prototype.setUpListenerForUserChoice = function () { //STEP 9
  PubSub.subscribe('SelectView:user-choice', (event) => {
    console.log('index', event.detail);
    index = event.detail; //STEP 12
    this.findObjectAndPublish(index); //STEP 13

  });

CountriesData.prototype.findObjectAndPublish = function (index) { //STEP 11
  countryObject = this.getData[index];
  PubSub.publish('CountriesData:send-country', countryObject);

};


};

module.exports = CountriesData;