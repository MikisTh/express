const express = require("express");
const app = express();
const value = document.getElementById('value');
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')
const incrementFiveButton = document.getElementById('incrementFive')
const incrementOneButton = document.getElementById('incrementOne')

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;


let contador = 0;

app.get("/contador", function (req, res) {
  ++contador;
  res.send({ contador });
});

plusButton.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
        count += 1;
        updateValue();
    },100);
});

minusButton.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
        count -= 1;
        updateValue();
    },100);
});

resetButton.addEventListener('click', () => {
        count = 0;
        updateValue();
});

incrementFiveButton.addEventListener ('click', () => {
    intervalID = setInterval(() => {
        count = +5;
        updateValue();
},100);

});

incrementOneButton.addEventListener('click', () => {
    intervalID = setInterval(() => {
        count = +1;
        updateValue();
},100);

});

document.addEventListener('mouseup', () => clearInterval(intervalID));

app.listen(3000);