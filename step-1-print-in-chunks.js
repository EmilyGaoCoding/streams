function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  var https = require('https');
  https.get(requestOptions, response => {
    response.on('data', function (data) {
      console.log(data + '\n');
    })
  })
}

getAndPrintHTMLChunks();
