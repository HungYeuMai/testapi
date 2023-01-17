var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require('cors');
app.use(cors())
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
