window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        loader = document.querySelector('.loader');

    // loader -------------------------
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // ----------------------------


    // tabs ----------------------------


    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        });
    }
    function showTabContent(i = 0) {
        tabs[i];
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {

            tabs.forEach((item, ind) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(ind);

                }
            });
        }
    });

    // qachonki dinamik tarzda yana bir janr qoshisa quyidagi kod yangi janr uchun ishlamaydi shuning uchun yuqoridagi koddan foydalanildi
    // tabs.forEach((item,ind) => {
    //     item.addEventListener('click', () => {
    //         hideTabContent();
    //         showTabContent(ind);
    //     });
    // });

    //----------------------------

    //  Date ------------------------

    const deadLine = '2022-11-24';

    function getTimeRemaining(endtime) {
        let days,hours,minutes,seconds;
        const timer = Date.parse(endtime) - Date.parse(new Date());

        if(timer <= 0){
            days= 0;
            hours = 0;
            minutes = 0;
            seconds = 0 ;
        }else{
            days = Math.floor((timer / (1000* 60 *60 *24)));
            hours = Math.floor((timer / (1000 *60 *60))% 24);
            minutes = Math.floor((timer / (1000 * 60))% 60);
            seconds = Math.floor((timer / 1000) %60 );
        }

      
            
            return { timer, days, hours, minutes, seconds };
    }

    function getZero(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector,endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(setTimer, 1000);
            
        function setTimer() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML= getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.timer <= 0){
                clearInterval(timeInterval);
            }
        }
    }


    setClock('.timer', deadLine);


    // const deadLine = '2022-12-10';

    // function getTimeRemaining(endtime) {
    //     const timer = Date.parse(endtime) - Date.parse(new Date()),
    //         days = Math.floor((timer / (1000 * 60 * 60 * 24))),
    //         hours = Math.floor((days / 24) % 24),
    //         minutes = Math.floor((timer / (1000 * 60)) % 60),
    //         seconds = Math.floor((timer / 1000) % 60);
    //     return { timer, days, hours, minutes, seconds };
    // }

    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num
    //     }
    // }

    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);


    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);

    //         if (t.timer < 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }


    // }

    // setClock('.timer', deadLine);
    // ---------------------------


    // Modal ----------------------


    const modalTrigger =  document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modalTimerId = setTimeout(openModal,5000);
    //  open modal function
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // close modal function
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

    }
    
    // iteration open modal function
    modalTrigger.forEach((item) => {
        item.addEventListener('click', ()=> {
            openModal();
            clearInterval(modalTimerId);    

        });
    });

    // events to  open and close
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click',(e) => {
        if(e.target === modal) {
          closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    }); 

    // opne modol function by scroll
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll',showModalByScroll);
            clearInterval(modalTimerId);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});
