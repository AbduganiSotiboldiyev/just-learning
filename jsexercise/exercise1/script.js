

const numberOFSeries = +prompt("How many movies have you watched?", "");

if (numberOFSeries < 5){
    console.log("You have to watch at least 5 movies.");
} else if( numberOFSeries >= 5 && numberOFSeries <=10){
    console.log("You have to watch at most 10 movies.");
} else {
    console.log("You have to watch more than 10 movies.");
}
const seriesDB = {

    count : numberOFSeries,
    series : {},
    actors : {},
    genres :[],
    privat : false,

};

let name1 = prompt("What is the name of movie that has been watched? " ),
    score1 = +prompt(" How do you like it?" , '10 out of ?'),
    name2 = prompt("What is the name of movie that has been watched?"),
    score2 = +prompt(" How do you like it?" , '10 out of ?');

while( name1.length <= 0 && name2.length <= 0) {
    name1 = prompt("What is the name of movie that has been watched? " );
    name2 = prompt("What is the name of movie that has been watched? ");

}

seriesDB.series[name1] = score1;
seriesDB.series[name2] = score2;

console.log(seriesDB);


