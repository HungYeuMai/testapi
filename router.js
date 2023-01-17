const { app } = require("./instant");
const mock = require("./mock");

app.get("/rooms", (req, res) => {
    res.send({ 
        err: 0,
        data: mock.rooms
    })
});

app.post('/',(req,res)=>{
    console.log('====================================');
    console.log(req.body, req.params, req.query);
    console.log('====================================');

    res.json(req.body)
})