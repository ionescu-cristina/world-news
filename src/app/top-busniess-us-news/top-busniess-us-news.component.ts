import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-top-busniess-us-news',
  templateUrl: './top-busniess-us-news.component.html',
  styleUrls: ['./top-busniess-us-news.component.scss']
})
export class TopBusniessUsNewsComponent implements OnInit {

  topBusniessNewsDisplay: any = [];

  constructor(private services: NewsapiService) { }

  ngOnInit(): void {
    this.services.topBusniessNews().subscribe((result) => {
      this.topBusniessNewsDisplay = result.articles;
    })
  }

}
