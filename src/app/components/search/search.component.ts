import { Component, OnInit,ViewChild, OnDestroy } from "@angular/core";
import { SearchService } from "../../service/search.service";
import {SearchInfoComponent} from "../searchinfo/searchinfo.component";
import { HttpClient } from '@angular/common/http';
import {Movie} from '../../models/movie';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
  })

export class SearchComponent implements OnInit{
   public viewCount: number;
   CompFlags = CompFlags;
   pageNo = 1;
   state = CompFlags.None;
   movieName="";
   totalResults: number;
   showLoadMore: boolean;
   selectedMovie: Movie;
   movies: Movie[];
   languageList:any;


   @ViewChild(SearchInfoComponent)
   private searchInfoComponent: SearchInfoComponent;
   

  constructor(private searchService: SearchService,private httpClient: HttpClient) {
      this.viewCount = 1; 
   }

   ngOnInit() {}

  changeFlag(flag:CompFlags,movieName:String){
    (this.state & flag) ? this.state &= ~flag : this.state |= flag;
  }

   searchMovie(movieName) {
    this.resetList();
    this.searchService.getMovie(movieName,this.pageNo)
    .subscribe((res) => {
      if (res.Error) {
        console.log(res.Error);
      } else {
        console.log(res);
        this.movies = res;
        this.totalResults = Number(res.totalResults);
         }
    })
  }

  resetList = () => {
    this.pageNo = 1;
    this.selectedMovie = undefined;
    this.showLoadMore = true;
  }

  checkState(flag:CompFlags){
    return !!(this.state & flag);
  }

public incrementViewCount() {
      this.viewCount = this.viewCount + 1;
   }

   onLoadMore = () => {
    this.pageNo++;
    this.searchService.getMovie(this.movieName, this.pageNo)
      .subscribe(res => {
        if (res.Error) {
          console.log(res.Error);
        } else {
          this.movies = this.movies.concat(res.Search);
          
        }
      });
  }
}

export enum CompFlags{
  None = 0,
  SearchInfoComponent = 1 << 0,
}