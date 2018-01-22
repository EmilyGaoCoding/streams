module.exports = function getHTML (options, callback) {
    /* Your code here */
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
