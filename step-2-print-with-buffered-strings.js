function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  var https = require('https');
  var output = '';

  https.get(requestOptions, function (response) {
    response.on('data', function (data) {
      output += data;
    });
    response.on('end', function () {
      console.log(output);
    });
  })
}

getAndPrintHTMLChunks();
