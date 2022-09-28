var express = require("express");
var app = express();

// // Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
const bodyParser = require("body-parser");

app.use(bodyParser.json());
var server = app.listen(process.env.PORT, () => {
  console.log("====================================");
  console.log(`Server and socket io listen on ${process.env.PORT}`);
  console.log("====================================");
});

var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

server.on("error", onServerError);
server.on("listening", onServerListening);

function onServerError(error) {
  console.log("====================================");
  console.log(`socket error ${error}`);
  console.log("====================================");
}

function onServerListening() {
  console.log("====================================");
  console.log(`socket listening`);
  console.log("====================================");
}

module.exports = {
  io,
  app,
};
