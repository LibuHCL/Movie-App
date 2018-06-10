export interface Movie {
    Title: string;
    Year: number;
    Rated:string;
    Released:string;
    Runtime:string;
    Genre:Genre;
    Director:string;
    Writer:Writer;
    Actors:Actors;
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
  export interface Genre {
    Genre:String;
  }
  export interface Writer {
    Writer:String;
  }
  export interface Actors {
    Actor:String;
  }

