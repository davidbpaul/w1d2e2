
var request = require("request");

request("https://google.com", function(err, response, body) {
  if (err) {
    throw err;
  }
  console.log(body);
});

