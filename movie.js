class Movie{
    
    constructor(title = " " , studio = " ", rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

  get PG(){
    return this.arrmovie;

  }
  set PG(detail){
     this.arrmovie = [];
    this.title = detail.title;
    this.studio = detail.studio;
    this.rating = detail.rating;
    if(this.rating == "PG"){
        this.arrmovie.push(this.title);
    }
    return this.arrmovie;

  }
    
}
 


const movie1 = new Movie("Casino Royale", "Eon Productions", "PG");
const movie2 = new Movie("Cindrella", "Eon Productions", "u");
const movie3 = new Movie("harry potter", "Eon Productions", "PdG");
const movie4 = new Movie("ayalan", "Eon Productions", "PG");

console.log(movie1);

console.log(movie1.PG);