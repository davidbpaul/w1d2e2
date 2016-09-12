var http = require("http");

function printExampleHTML(callback) {

  var requestOptions = {
    host: "google.com",
    path: "/"
  };

  http.get(requestOptions, (response) => {    // HTTP Response Callback

    response.setEncoding("utf8");             // Use UTF-8 encoding
           // On Data Received
    response.on("data", function(data){

        console.log(data);
  })

  response.on("end", function() {
              // On Data Completed
        console.log("Response stream complete.");
  });

  });

}

  printExampleHTML(console.log);






