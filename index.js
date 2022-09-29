require('./bootstrap');
require('./instant');
require('./logic');
require('./router');

// // keep heroku
var http = require("http");
try {
  setInterval(function () {
    http.get("http://chat-with-idol-client.herokuapp.com/");
    http.get("http://chat-with-idol-server.herokuapp.com/rooms");
    
    console.log("====================================");
    console.log("keep alive");
    console.log("====================================");
  }, 25e6);
} catch (error) {
  console.log("====================================");
  console.log("keep alive error", JSON.stringify(error));
  console.log("====================================");
}
