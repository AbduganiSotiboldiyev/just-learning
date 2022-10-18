let numberOFSeries = +prompt("How many movies have you watched?", "");

const countOFSeries = () => {
    
    while (numberOFSeries === 0 || isNaN(numberOFSeries)) {
        alert("you can't  skip");
        numberOFSeries = +prompt("How many movies have you watched?", "only numbers allowed");
    }
};

countOFSeries();

const seriesDB = {

    count : numberOFSeries,
    series : {},
    actors : {},
    genres :[],
    private : false,

};


const asking = function() {
    for (let i = 0; i < 2; i++) {
    let  name1 = prompt("What is the name of movie that has been watched? " ),
           score1 = +prompt(" How do you like it?" , '10 out of ?');
      while ( isNaN(score1) ){
                alert('Only numbers are allowed')
                score1 = +prompt("three numbers, which do you like?",'only numbers');
            }

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
};
asking();


function check(){
    if (seriesDB.private != false) {
        console.log('error!');
    } else {
        console.log(seriesDB);
    }
}
check();

function writeGenres() {
    let i =0;
    while (i <3) {
        let savol = prompt(`${i+1}- your favorite type of movie`);
        while ( savol == '' || savol == null){
            alert('that is too important');
            savol =prompt(`${i+1}- your favorite type of movie`);
        } 
        seriesDB.genres[i] = savol;
        i++;
    }
}
writeGenres();








