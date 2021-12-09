import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss']
})
export class TechNewsComponent implements OnInit {

  techNewsDisplay:any = [];

  constructor(private services:NewsapiService) { }

  ngOnInit(): void {
    this.services.techApiNews().subscribe((result)=>{
      this.techNewsDisplay = result.articles;
    })
  }

}
