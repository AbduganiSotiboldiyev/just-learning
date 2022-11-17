"use strict";

const btn = document.querySelector('.btn');
const bg  = document.querySelector('.background');



function myAnimation() {
    const car = document.querySelector('.car');
    let pos = 0;
    bg.style.background= 'red';

    const timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 92){
            clearInterval(timerId);
        }else {
            console.log(pos);
            pos ++;
            car.style.left = pos + '%';
        }
    }
}


btn.addEventListener('click', myAnimation);