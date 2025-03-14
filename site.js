/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            appTitle:  "IMDB + Silas' Top 8 Movies",
            owner: "Silas",
            github: "https://github.com/sjaworowicz"
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText(dateArray) {
              console.log(dateArray)
                  let month;
            switch(dateArray[1]) {
                  case 1:
                  month = "January";
                        break;
                      case 2:
                        month = "February";
                        break;
                      case 3:
                        month = "March";
                        break;
                      case 4:
                        month = "April";
                        break;
                      case 5:
                        month = "May";
                        break;
                      case 6:
                        month = "June";
                        break;
                      case 7:
                        month = "July";
                        case 8:
                        month = "August";
                        break;
                      case 9:
                        month = "September";
                        break;
                      case 10:
                        month = "October";
                        break;
                      case 11:
                        month = "November";
                        break;
                      case 12:
                        month = "December";
            };
            return month + " " + dateArray[2] + ", " + dateArray[0];
            },
            posterClick(index) {
              this.movies[index].posterindex++

              if(this.movies[index].posterindex >= this.movies[index].posters.length) {
                this.movies[index].posterindex = 0;
                return this.movies[index].posterindex;
              };

              if(this.movies[index].posterindex < 0) {
                this.movies[index].posterindex = 0;
                return this.movies[index].posterindex;
              };
            },
            timeText(minutes) {
              timeAsDecimal = minutes / 60;
              hours = Math.trunc(timeAsDecimal);
              remainingMinutes = minutes - hours + 60;
              return hours + "h " + remainingMinutes + "m";
              }
            },
      computed: {
        currentObject() {
          return this.movies[index].posters[this.index[index].posterindex];
        }
      }


})

vue_app.mount("#vue_app")
