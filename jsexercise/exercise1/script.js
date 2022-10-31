"use strict";


const  seriesDb = {

    count : 0,
    series : {},
    actors : {},
    genres :[],
    private : false,
    countOFSeries : function() {
            this.count = +prompt("How many movies have you watched?", "");
           while(this.count === 0 || isNaN  (this.count)|| this.count == null) {
                alert("you can't  skip");
                this.count = +prompt("How many movies have you watched?", "only numbers allowed");
            }
            
    },
    visibleDb : function() {
        if (this.private === false) {
            this.private = true;
        } else {
            this.private = false; 
        }
    },
    askingDb : function() {
        for (let i = 0; i < 2; i++) {
            let  name1 = prompt("What is the name of movie that has been watched? " ),
                score1 = +prompt(" How do you like it?" , '10 out of ?');
            while ( isNaN(score1) ){
                    alert('Only numbers are allowed')
                    score1 = +prompt("three numbers, which do you like?",'only numbers');
                }

            if ( name1 != null && name1 != "" && score1 != null && score1 != ""){
                this.series[name1] = score1;
                console.log('done!');
            } else {
                console.log('error!');
                i--;
            }

            }
        if   (this.count < 5) {
            console.log("You watched less than 5 movies");
        } else if   ( this.count >= 5 && this.count <= 10) {
            console.log("You watched more than 5 movies");
        }  else if   (this.count >= 10){
            console.log("You watched more than 10 movies");
        }   else {
            console.log('error!');
        }
    },
    check : function(){
        if   (this.private != false) {
            console.log('This is not private');
        } else {
            console.log(this.private);
        }
    },
    writeGenres : function() {
        let confirmGenre = confirm("Do you want to share your favorite movies?");

        if(confirmGenre) {
            let  i = 0;
            while(i < 3) {
                let question = prompt(`${i + 1 }: Your favorite type of movie?`);
                while(question == '' || question == null) {
                    alert('you have to write');
                    question = prompt(`${i + 1}: Your favorite type of movie?`);
                }
                this.genres[i] = question;
                i ++;
            }
            this.genres.forEach(function(value,index,arr) {
                console.log(`your ${index + 1} favourite genre  is ${value} : all genres that you like ${arr}`);
            })
        } else {
            console.log("you don't have to");
            this.genres = 'secret';
        }
        
     
    },

};

console.log (seriesDb.countOFSeries());
console.log (seriesDb.visibleDb());
console.log(seriesDb.askingDb());
console.log(seriesDb.check());
console.log(seriesDb.writeGenres());
console.log (seriesDb);

//    let i =0;
//         while (i <3) {
//             let savol = prompt(`${i+1}- your favorite type of movie`);
//             while ( savol == '' || savol == null){
//                 alert('that is too important');
//                 savol =prompt(`${i+1}- your favorite type of movie`);
//             } 
//             this.genres[i] = savol;
//             i++;
//         }















