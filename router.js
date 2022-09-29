const { app } = require("./instant");
const mock = require("./mock");

app.get("/rooms", (req, res) => {
    res.send({ 
        err: 0,
        data: mock.rooms
    })
});
