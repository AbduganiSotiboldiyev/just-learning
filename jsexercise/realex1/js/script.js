"use strict";
document.addEventListener('DOMContentLoaded' ,() => {
    const mainBg =  document.querySelector('.main_bg'),
        mainInfoTitles = document.querySelector('.main_info_title'),
        mainSeries2 = document.querySelector('.main_bg_series_movie'),
        mainAdver =document.querySelector('.main_adver_img');

    const addForm = document.querySelector('.main_bg_series_search_form'),
            inputVal = addForm.querySelector('.main_bg_series_search_inn'),
            checkbox = addForm.querySelector('.main_bg_series_search_check');
        
            
    // removing adds

    const deleteAdd = (add)=>{
        add.remove();
    };



    // representing serias with js
    const seriesDb = {
        series : [
            'omar','the final legacy', 'ertugrul', 'magnificennt country', 'the great suljunks:guardians'
        ]
    };  
   


    addForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        const newSeries = inputVal.value;
        const favourite = checkbox.checked;

        if (newSeries) {
            if(favourite){
                console.log(newSeries);
            }
            seriesDb.series.push(newSeries);
            resentSeries(seriesDb.series,mainSeries2);
        }
        
    
        event.target.reset();

    });

   
    function resentSeries(series, parent) {
        parent.innerHTML = " ";
        series.sort().forEach((item,ind) => {
       
            parent.innerHTML += `<li class="main_bg_series_movie_serie">${ind +1} ${item}
                <i class="fa-solid fa-trash"></i>
            </li> `;
        
            
        });  
    }
    resentSeries(seriesDb.series,mainSeries2);
    document.querySelectorAll('i').forEach((trash,index) => {
        trash.addEventListener(('click'), () => {
            trash.parentElement.remove();
            seriesDb.series.splice(index,1);
            console.log(seriesDb.series);
            resentSeries(seriesDb.series,mainSeries2);
        });
    });



    const createChanges = () => {
        // replasing movies title
        mainInfoTitles.textContent = 'Comedy';

        // replasing movies img
        mainBg.style.cssText = "  background-image: url('./images/The\ Avengers\ Age\ of\ Ultron\ Team\ Ultra\ HD\ Desktop\ Background\ Wallpaper\ for\ _\ Widescreen\ &\ UltraWide\ Desktop\ &\ Laptop\ _\ Multi\ Display\,\ Dual\ Monitor\ _\ Tablet\ _\ Smartphone.jfif')";

    };
    
    createChanges();
    deleteAdd(mainAdver);
});






