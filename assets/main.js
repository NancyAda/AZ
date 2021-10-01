//Variables and Concatenation
var aha = "Nancy Adaeze"
var age = 27
console.log("name");
console.log("My name is " + aha + " and I am " + age + " years old.")
console.log(`My name is ${aha} and I am ${age} years old.`)

const numOne = 2638
const numTwo = 486892
console.log(numOne + numTwo)

//DOM
const imo1 = document.getElementById("imo").style.color="red"
const class1 = document.getElementsByClassName("naijia");
const p1 = document.getElementsByTagName("P");

document.getElementById("naijagirl").innerHTML = "I am a Canadian woman"

//Event Listeners
let btn1 = document.getElementById("btn")
btn1.addEventListener("mouseover", function() {btn.style.color = "chartreuse"});

//Arrays
const evenNumbers = new Array (2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
const fruits = new Array ('Apple', 'Pear', 'Orange', 'Pineapple', 'Grape');

