function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');
  var output = '';

  https.get(options, response => {
    response.on('data', data => {
      output += data;
    });
    response.on('end', function() {
      callback(output);
    });
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);