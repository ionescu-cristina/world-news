import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-apple-news',
  templateUrl: './apple-news.component.html',
  styleUrls: ['./apple-news.component.scss']
})
export class AppleNewsComponent implements OnInit {

  appleNewsDisplay: any = [];

  constructor(private services: NewsapiService) { }

  ngOnInit(): void {

    this.services.appleNews().subscribe((result) => {
      this.appleNewsDisplay = result.articles;
    })
  }

}
