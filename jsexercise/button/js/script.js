"use strict";

// const btn = document.querySelector('#btn');
// const overlay  = document.querySelector('.overlay');
// // 1-way 
// btn.onclick= () => {
//     alert(' you');
// };

// 2 way
// btn.addEventListener('click', () => {
//     alert('22222');
// });
// btn.addEventListener('click', () => {
//     alert('55552222');
// });

// btn.addEventListener('mouseenter', () => {
//     // console.log(event.target);
//     event.target.remove();
// });

// -------------------------------

// let  i = 0;

// const addElement = (evnt) => {
    
//     i ++;
    
//     if (i ===3) {
//         btn.removeEventListener('click', addElement);
//     }
//     console.log(i);
// }; 

// btn.addEventListener('click', addElement);


// -----------------------------
  
// const cb = (e) =>{
//    console.log(e.currentTarget);
// };
// btn.addEventListener('click', cb);
// overlay.addEventListener('click',cb );

// // ----------------------------


// const link = document.querySelector('a');

// link.addEventListener('click',(ev) => {
//     ev.preventDefault();
//     alert("you");
// });


// ----------------------------

// const btns = document.querySelectorAll('button');
// const logger = () => {
//     console.log(1);
// };
// btns.forEach((item) => {
//     item.addEventListener('click',logger);
// });

// ----------------------------
// DOM boyicha navigatsiya

// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#btn').parentNode);
// console.log(document.querySelector('[data-current = "b"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text"){
        continue;
    }
    console.log(node);
}
