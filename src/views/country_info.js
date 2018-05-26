const PubSub = require('../helpers/pub_sub.js');

const CountryInfo = function () {


CountryInfo.prototype.setUpListenerForSelectedObject = function () { //STEP 14
  PubSub.subscribe('CountriesData:send-country', (event) => {
    const countryObject = event.detail; //STEP 17
    this.displayObject(countryObject); //STEP 18
    console.log('coming from view', event.detail);



  });

};

CountryInfo.prototype.displayObject = function (object) { //STEP 16
  const infoContainer = document.querySelector('#country-population');
  infoContainer.innerHTML = '';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'hello';
  infoContainer.appendChild(paragraph);
};


};

module.exports = CountryInfo;
