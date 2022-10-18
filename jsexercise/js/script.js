"use strict"
// working with users
// const place = confirm("Are you here?");
// console.log(`here right? ${place}`)
// console.log(typeof (place))

// const age = prompt("How old  are you?", '');
// console.log(typeof age)
// console.log(`I'm ${age}`);
// const ages = [];
// ages.push(age)

// console.log(typeof ages);

// document.getElementById('demo').innerHTML = `I'm ${ages}`;

// const channel = prompt("Who is your favourite youtuber?", "ex:ulugbeksamigjanov");
// const youtuber = `https://youtube.com/${channel}/videos`;
// document.getElementById('demo').innerHTML =`My favourite youtober is: ${youtuber}`;
// console.log(youtuber);


// Logical operations
// const age = prompt("How old are you?");

// if (age>18) {
//     console.log("welcome");
// } else {
//     console.log("No entry");
// }

// const color = prompt("You favourite color?", '');
// switch  (color) {
//     case "red":
//         console.log("red");
//         break;
//     case "green":
//         console.log("green");
//         break;
//     case "yellow":
//         console.log("yellow");
//         break;
//     default:
//         console.log("there is no more option exsept red, green, or yellow"); 
//         break;
// };


// // tsikllar

// let num=1;
// // while(num <= 10){
// //     console.log(num);
// //     num++;
// // }

// do {
  
//     console.log(num);
//     num++;
//     if (num ===8 ) {
//         continue;
//     }

// } while(num <= 10);


// for (let i=1;i<=10;i++) {
//     if (i === 8) {
//        break;
//     }
//     console.log(i);
// }


// function
// --------------------------------------

// function declaration 

// function sumAandB(a , b) {
//     return a + b;
// }
// document.getElementById('demo').innerHTML = sumAandB(5,6);
// console.log(sumAandB(10,6));


// function expression

// const calca = function(a,b) {
//     return a + b;
// };

// document.getElementById('demo').innerHTML = calca(6,6);
// console.log(calca(6,6));

// Arrow functions

// const calca = (a,b) => {
//     return a + b;
// };

// document.getElementById('demo').innerHTML = calca(6,9);
// console.log(calca(10,5));


// ----------------------------------
//  methods
// ----------------------------------

// const user = "Abdugani";
// const arr = [1,2,3,4];

// const userUpper = user.toUpperCase();
// const userLower  = user.toLowerCase();
// console.log(userUpper, userLower);

// console.log(user.indexOf("g"));
// console.log(user.slice(user.indexOf("g"), user.length + 1));  

// const num = 5.8;
// console.log(Math.round(num));
// const  borderWidth = "25.8px";

// console.log(parseInt(borderWidth));
// console.log(parseFloat(borderWidth));
 