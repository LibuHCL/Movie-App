export interface Movie {
    Title: string;
    Year: number;
    Rated:string;
    Released:string;
    Runtime:string;
    Genre:string;
    Director:string;
    Writer:string;
    Actors:string;
    Plot:string;
    Language:string;
    Awards:string;
    Poster: string;
    imdbRating:number;
    imdbVotes:number;
    Type:string;
    ratings: Ratings;
  }

  export interface Ratings {
    Source:String;
    Value :String;
  }
