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

const channel = prompt("Who is your favourite youtuber?", "ex:ulugbeksamigjanov");
const youtuber = `https://youtube.com/${channel}/videos`;
document.getElementById('demo').innerHTML = `My favourite youtober is: ${youtuber}`;
console.log(youtuber)