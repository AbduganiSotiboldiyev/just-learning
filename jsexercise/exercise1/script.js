

const numberOFSeries = +prompt("How many movies have you watched?", "");


const seriesDB = {

    count : numberOFSeries,
    series : {},
    actors : {},
    genres :[],
    privat : false,

};



for (let i = 0; i < 2; i++) {
    const  name1 = prompt("What is the name of movie that has been watched? " ),
           score1 = +prompt(" How do you like it?" , '10 out of ?');

    if ( name1 != null && name1 != "" && score1 != null && score1 != ""){
        seriesDB.series[name1] = score1;
        console.log('done!');
    } else {
        console.log('error!');
        i--;
    }

}

if (seriesDB.count < 5) {
    console.log("You watched less than 5 movies");
} else if (seriesDB.count >= 5 && seriesDB.count <= 10) {
    console.log("You watched more than 5 movies");
}  else if (seriesDB.count >= 10){
    console.log("You watched more than 10 movies");
}   else {
    console.log('error!');
}


console.log(seriesDB);


