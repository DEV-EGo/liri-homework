console.log('this is loaded');

var Spotify = require('node-spotify-api');

var spotify = new spotify({
    id= e4286eca0d684aeabd5fb28fd0369226,
    secret= be2262e128f4d8ea7a57f38138a1306,
});
// keys stored in "spotify variable"^^
spotify.search({ type: 'track', query: 'all the small things' },
    function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
// using promises to omit callback
spotify.then(function (response) {
    console.log(response);
})
    .catch(function (err) {
        console.log(err);
    });
if (err) {
    return console.log("error occured:" + err);
} console.log(data);
//