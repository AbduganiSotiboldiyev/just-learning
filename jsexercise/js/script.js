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
// console.log(parseFloat(borderWidth));\


//  Call back function

// function  first(cb) {
//     setTimeout(() => {
//         console.log(1);
//         cb();
//     },1000);
    
// }

// function  second() {
//     console.log(2);
// }

// first(second);

// const edu = (subjuct, callback) => {
//     console.log(`I want to teach ${subjuct}`);
//     callback();
// };

// function done() {
//     console.log("That's great!");
// }

// edu('JavaScript', done );   

// edu('JavaScript', function () { console.log("That's great")});

//  ---------------------------------------
// Obyektlar destruptatziya
// ----------------------------------------
// const school = {
//     nameOF: "genius",
//     adress: "shakhrikhon",
//     tutionFee: "free",
//     numOfStudent:2354,
//     class : {
//         beginner: "6 to 10 ",
//         middle: "11 to 14",
//         senior : "15 to 16",
//     },
//     gratitude: function () {
//         console.log("Study hard and you can gratitude that school on your own!" );
//     } 
// };

// ----------------------------------
// // getting key through key method
// --------------------------------
// const informAboutSchool = function (cb) {
//     for (let key in school) {
//     if (typeof school[key] === "object") {
//         for (let i in school[key]) {
//             console.log(`we offer your child ${i} class: ${school[key][i]} `);     
//         }
//     }   else if(typeof school[key] === "function") {
//         school[key]();
//     } else {
//         console.log(school[key]);
//     }
    
//     }
//     setTimeout(() => {
//         console.log(1);
//         cb();
//     } ,1000); 
   
// };

// function cb() {
//     console.log("cancelled");
// }

// informAboutSchool(cb);

// -------------------------------
// Arrays 
// -------------------------------
// const arr = [1,19,22,31,4,5];
// // writing sort methods problem figuring out with   callback function wit
// function help(a ,b) {
//     return a-b;

// }
// arr.sort(help);
// console.log(arr);

// arr.sort((a,b) => a-b); 
// for (let value of arr) { 
//     console.log(value);
// }

// arr.forEach(function (item,index,array ){
//     console.log(`${index}: ${item} into ${array}`);
// });


//  CLONE(nusxa olish), ES6

// massive cloning

// let x =10;
// let y = x;

// y= y +5;

// console.log(x);
// console.log(y);

// object cloning

// 1-way object cloning and most usefull than others ways

// const numbers = {
//     x : 5,
//     y :10,
// };
// const otherNumber = {
//     z : 6,
// }
// const newNumbers = Object.assign(otherNumber ,numbers); // adding two 2 object 
// const newNumbers1 = Object.assign({},numbers); // cloning object

// newNumbers.x =15;
// console.log(newNumbers);

// 2-way object cloning with using for method and some funcyion
const numbers = {
    x : 5,
    y :10,
    z : {
        a: 8,
        b : 3,
    }
};

// for (let key in numbers) {
//   if (typeof numbers[key] === 'object') {
//     for (let i in numbers[key]) {
//       console.log(numbers[key][i]);
//     }
//   } else {
//     console.log(numbers[key]);
//   }
// }


const objOf = (obj) => {
  const objectOfCopy = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      const objOfObj = (obj2) =>{
        const objectOfCopy2 = {}; 
        for (let i in obj2) {
          objectOfCopy2[i] = obj2[i];
        } 
        objectOfCopy[key] = objectOfCopy2;
      };
      objOfObj(obj[key]);
    } else {
          objectOfCopy[key] = obj[key];
      }
  } 
  return objectOfCopy;
  
};

const newNumbers = objOf(numbers);
newNumbers.z.a = 0;

console.log(newNumbers);
console.log(numbers);















