"use strict";

const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length);// returns number of classes
// console.log(btns[0].classList.item(1)); // returns name of class

// btns[1].classList.add('red'); // add class
// btns[0].classList.remove('blue'); // remove class
// btns[1].classList.toggle('red');// toggle add a class if class isn't exsist or removes if it is exsist
// btns[0].classList.toggle('blue');//toggle add a class if class isn't exsist or removes if it is exsist
// if (btns[0].classList.contains('blue')) { // checks exsistance of class
//     console.log("yeap");
// }

// ---------------------------
//   just exercise
// --------------------------
// btns[0].addEventListener('click',() => {
//     if (btns[1].classList.contains('red')){
//         btns[1].classList.remove('red');
//     } else {
//         btns[1].classList.add('red');
//     }
//     // btns[1].classList.toggle('red');
// });

// ----------------------------
// just exercise 2
//  --------------------------
btns[0].addEventListener('mouseover', () => {
    btns.forEach((item, ind) => {
        if(ind % 2) {
            item.classList.toggle('red');
        } else{
            item.classList.toggle('blue');
        }
       
       
    });
});

 btns[0].addEventListener('click',() => {
    btns.forEach((item,ind) => {
        item.classList.toggle('blue');
        if(!ind %2) {
            item.classList.add('red');
        }
    });
});


// working with Delegations


// const mainBt = document.querySelector('.main'),
//         newBtn = document.createElement('button'),
//         btns = document.querySelectorAll('button');


// bu delegationga misol ya'ni dinamik tarzda qo'shilgan har bir element oldindan mavjud bo'gan elementlar nima qilishga qodir bo'lsa
// shunga qodir bo'ladi.
// mainBt.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON') {
//         console.log('click');
//     }
// });


// forEach method bilan dinamik qo'shilgan elementlarga murojat eta olmaymiz
// btns.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log('clicked');
        
//     });
//     console.log(item);  // va dinamik tarzda qo'shilgan elementni ko'rsatmaydi
// });

// newBtn.classList.add('red');
// mainBt.append(newBtn);

