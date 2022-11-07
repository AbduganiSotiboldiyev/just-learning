"use strict";

const mainBg =  document.querySelector('.main_bg'),
      mainInfoTitles = document.querySelector('.main_info_title'),
      mainSeries2 = document.querySelector('.main_bg_series_movie'),
      mainAdver =document.querySelector('.main_adver_img');


// removing adds
mainAdver.remove();


// representing serias with js
const seriesDb = {
    series : [
        'Omar','the final legacy', 'ertugrul', 'magnificennt country', 'the great suljunks:guardians'
    ]
};

mainSeries2.innerHTML = ' ';
seriesDb.series.forEach((item,ind) => {
    mainSeries2.innerHTML += `<a class="main_bg_series_movie_serie">${ind+1} ${item}</a>`;
    
}
);

// replasing movies title
mainInfoTitles.textContent = 'Comedy';

// replasing movies img
mainBg.style.cssText = "  background-image: url('./images/The\ Avengers\ Age\ of\ Ultron\ Team\ Ultra\ HD\ Desktop\ Background\ Wallpaper\ for\ _\ Widescreen\ &\ UltraWide\ Desktop\ &\ Laptop\ _\ Multi\ Display\,\ Dual\ Monitor\ _\ Tablet\ _\ Smartphone.jfif')";






