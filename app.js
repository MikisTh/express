const express = require("express");
const app = express();

let cont = 0;
let increment1 = 0;
let increment5 = 0;

app.get("/cont", function (req, res) {
  res.send({ cont });
});

app.get("/increment1", function(req, res){
    cont++
    increment1++;
    res.send({cont})
    
})

app.get("/increment5", function(req, res){
    cont += 5
    increment5++;
    res.send({cont})
})

app.get("/relatorio", function(req, res){
    res.send({cont, increment1, increment5})
})

app.listen(3000);