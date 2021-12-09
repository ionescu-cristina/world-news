import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  //TO DO - change key with your APY KEY from https://newsapi.org/

  newsAppleApiUrl = `https://newsapi.org/v2/everything?q=apple&from=2021-12-07&to=2021-12-07&sortBy=popularity&apiKey=xxxxxx`;

  newsTeslaApiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-08&sortBy=publishedAt&apiKey=xxxxxx`;

  newsTopBusniessUsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=xxxxxx`;

  newsTechApiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=xxxxxx`;

  newsWallStreetApiUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=xxxxxx`;


  appleNews(): Observable<any> {
    return this.http.get(this.newsAppleApiUrl);
  }

  teslaNews(): Observable<any> {
    return this.http.get(this.newsTeslaApiUrl);
  }

  topBusniessNews(): Observable<any> {
    return this.http.get(this.newsTopBusniessUsApiUrl);
  }

  techApiNews(): Observable<any> {
    return this.http.get(this.newsTechApiUrl);
  }

  wallsStreetNews(): Observable<any> {
    return this.http.get(this.newsWallStreetApiUrl);
  }
}
