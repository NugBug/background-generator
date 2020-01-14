// import { without } from 'lodash'
// console.log(without)
var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".myButton");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor() {
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z="000000";
    var z1 = z.substring(0,y);
    return "#" + z1 + x;
}

function setRandomGradient() {
    var randomColor1 = randomColor();
    var randomColor2 = randomColor();
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    css.textContent = body.style.background + ";";
    color1.value = randomColor1;
    color2.value = randomColor2;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);

