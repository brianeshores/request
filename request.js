var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log("error ", error);
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response Content Type: ', response.headers['content-type']);
       })
       .on('end', function() {
        console.log('Download Complete.')
       })
       .pipe(fs.createWriteStream('./future.jpg'));
       console.log('Downloading Image')           // Note 4
