import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-wall-street-news',
  templateUrl: './wall-street-news.component.html',
  styleUrls: ['./wall-street-news.component.scss']
})
export class WallStreetNewsComponent implements OnInit {

  wallStreetNewsDisplay: any = [];

  constructor(private services: NewsapiService) { }

  ngOnInit(): void {
    this.services.wallsStreetNews().subscribe((result) => {
      this.wallStreetNewsDisplay = result.articles;
    })
  }

}
