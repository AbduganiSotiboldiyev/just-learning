

const numberOFSeries = +prompt("How many movies have you watched?", "");

const seriesDB = {

    count : numberOFSeries,
    series : {},
    actors : {},
    genres :[],
    privat : false,

};

const name1 = prompt("What is the name of movie that has been watched? " ),
    score1 = +prompt(" How do you like it?" , '10 out of ?'),
    name2 = prompt("What is the name of movie that has been watched?"),
    score2 = +prompt(" How do you like it?" , '10 out of ?');

seriesDB.series[name1] = score1;
seriesDB.series[name2] = score2;

console.log(seriesDB);


