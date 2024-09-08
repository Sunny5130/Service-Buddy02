const express = require("express");
const cors = require('cors');
const { getData, insertData } = require("./databaseHelper.js");
const {valid, insertUser, check } = require("./auth.js")

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

app.post("/upload" ,async(req, res) => {
    console.log(req.body);
    const putData = await insertData(req.body.data);
    res.json({"Status" : "Success"});
})

app.get("/data", async(req, res) => {
    var data = await getData();
    res.json({"data" : data});
})

app.post("/login", async(req, res) => {
    var data = req.body.data;
    console.log(data);
    const validBool = await valid(data.email);
    if(!validBool)
        res.json({"response" : false});
    
    else{
        const checkBool = await check(data.email, data.password);
        res.json({
            "response" : true,
            "access" : checkBool
        });
    }
})

app.post("/signup", async(req, res) => {
    var data = req.body.data;
    const validBool = await valid(data.email);

    if(validBool){
        res.json({"response" : false});
    }
    else{
        const insert = await insertUser(data);
        res.json({"response" : true});
    }
})

app.listen(port, () => {
    console.log("Server is running and Listning to port", port);
})