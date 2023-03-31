import express from "express";
import fs from 'fs'
let app = express();

app.use(express.static('./'));
app.use(express.json());

app.post("/statistics", (req, res) =>{
    
    fs.appendFileSync('statistics.txt', JSON.stringify(req.body) + '\n');

});

app.listen(3000, function () {

    console.log("ok");

});