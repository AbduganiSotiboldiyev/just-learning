"use strict";


// old ways to get HTML attributes
// const box = document.getElementById("box");
// const buttons = document.getElementsByTagName('button');
// const circles = document.getElementsByClassName('container_circles_circle');
// console.log(circles);
// console.log(buttons);
// console.log(box);

// new ways to get HTML attributes

// const hearts = document.querySelector('.container_hearts');
// const heart = hearts.querySelectorAll('.container_hearts_heart');
// heart.forEach((item) => {
//     console.log(item);
// });
// console.log(heart);

// DOM bilan ishlash

const box = document.querySelector('#box'); // 
box.style.cssText = 'background-color : red; width : 200px; height : 200px';

const buttons = document.querySelectorAll('button');

// 1-way that is very common
buttons.forEach((item) => {
    item.style.width= '65px';
});

// 2-way 

for (let i  = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'red';
}

// adding circles

const circles = document.querySelector('.container_circles'); // returns div code
const circle = document.querySelectorAll('.container_circles_circle'); // returns massive
const myCircle = document.createElement('div'); // creates div
myCircle.classList.add('container_circles_circle'); // gives  a classname to div which was created above 


circles.append(myCircle);
// const text = document.createTextNode('E');
// myCircle.append(text);
// myCircle.innerHTML = 'E';
// myCircle.textContent = 'E';
// circles.insertAdjacentHTML('beforeend','salom');

