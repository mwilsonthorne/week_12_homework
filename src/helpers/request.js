const Request = function (url) {
  this.url = url;

};

Request.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();


  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }

    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    // console.log(data);
    onComplete(data);
  });

  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();

};

module.exports = Request;
