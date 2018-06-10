import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../../service/search.service";

@Component({
    selector: 'search-info',
    templateUrl: './searchinfo.component.html',
    styleUrls: ['./searchinfo.component.css']
  })

  export class SearchInfoComponent implements OnInit {

    @Input() movieName: any;
   

    constructor(private searchService: SearchService) {}

	ngOnInit() {
    }

    isValidUrl = url => {
      return url !== 'N/A';
    }
	

  }