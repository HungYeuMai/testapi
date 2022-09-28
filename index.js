require('./bootstrap');
require('./instant');
require('./logic');
require('./router');

// // keep heroku
var http = require("http");
try {
  setInterval(function () {
    http.get("https://chat-with-idol-client.herokuapp.com/");
    http.get("https://chat-with-idol-server.herokuapp.com/");
    
    console.log("====================================");
    console.log("keep alive");
    console.log("====================================");
  }, 300000);
} catch (error) {
  console.log("====================================");
  console.log("keep alive error", JSON.stringify(error));
  console.log("====================================");
}
