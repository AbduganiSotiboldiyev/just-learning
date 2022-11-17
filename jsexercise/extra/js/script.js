"use strict";

const mainBg = document.querySelector('.main_bg'),
        mainAdvert = document.querySelector('.main_adver_img'),
        mainTitle2 = document.querySelector('.main_info_title'),
        mainSeries = document.querySelector('.main_bg_series_movie'),
        mainForm = document.querySelector('.main_bg_series_search_form'),
        mainFormAdd = mainForm.querySelector('.main_bg_series_search_inn'),
        checkBox = mainForm.querySelector('.main_bg_series_search_check');






const seriesDb = {
    series :[
        'omar', 'ertugrul','magnificent woman','aliens','galaxy guardians: no way to star'
    ]
};

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newSeries = mainFormAdd.value;
    const favourite = checkBox;
    if(newSeries) {
        if(favourite.checked === true) {
            console.log(`${newSeries} added to you favorites`);
        }
        if(newSeries.length > 18) {
            newSeries = `${newSeries.substring(0,18)}...`;
        }
        seriesDb.series.push(newSeries);
        resentSeries(seriesDb.series,mainSeries);
        
    }   
    event.target.reset();
});


function resentSeries(series,parent){
    parent.innerHTML = ' ';
    series.sort().forEach((item,ind) => {
    parent.innerHTML += ` <li class="main_bg_series_movie_serie"> ${ind+1}: ${item}
                                    <i class="delete fa-solid fa-trash"></i>
                                </li>`;
});
}
resentSeries(seriesDb.series,mainSeries);


document.querySelectorAll('.delete').forEach((trash,index) => {
    trash.addEventListener(('click'), () => {
        trash.parentElement.remove();
        seriesDb.series.splice(index,1);
        console.log(seriesDb.series);
        resentSeries(seriesDb.series,mainSeries);
    });
});




const changes = () => {
    mainBg.style.cssText = " background-image: url('./images/The\ Avengers\ Age\ of\ Ultron\ Team\ Ultra\ HD\ Desktop\ Background\ Wallpaper\ for\ _\ Widescreen\ &\ UltraWide\ Desktop\ &\ Laptop\ _\ Multi\ Display\,\ Dual\ Monitor\ _\ Tablet\ _\ Smartphone.jfif')";
    mainTitle2.textContent = 'Comedy';
};



changes();
mainAdvert.remove();






