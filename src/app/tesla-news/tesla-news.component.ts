import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tesla-news',
  templateUrl: './tesla-news.component.html',
  styleUrls: ['./tesla-news.component.scss']
})
export class TeslaNewsComponent implements OnInit {

  teslaNewsDisplay: any = [];

  constructor(private services: NewsapiService) { }

  ngOnInit(): void {
    this.services.teslaNews().subscribe((result) => {
      this.teslaNewsDisplay = result.articles;
    })
  }

}
