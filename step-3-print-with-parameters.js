function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  var output = '';

  https.get(options, response => {
    response.on('data', function (data) {
      output += data;
    });
    response.on('end', function () {
      console.log(output);
    });
  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
