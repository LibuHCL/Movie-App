import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  totalResults: number;
  private error: string;
  private errorflag: boolean;

  constructor(private http: Http) { }

  getMovie = (title,pageNo) => {
    return this.http.get(`http://www.omdbapi.com/?t=${title}&apikey=6c3a2d45&page=${pageNo}`).map(res => res.json());
  }
}
