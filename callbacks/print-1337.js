var getHTML = require('../callbacks/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printReverse (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printReverse);