import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppleNewsComponent } from './apple-news/apple-news.component';
import { TeslaNewsComponent } from './tesla-news/tesla-news.component';
import { TopBusniessUsNewsComponent } from './top-busniess-us-news/top-busniess-us-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { WallStreetNewsComponent } from './wall-street-news/wall-street-news.component';
import { NewsapiService } from './service/newsapi.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
    AppleNewsComponent,
    TeslaNewsComponent,
    TopBusniessUsNewsComponent,
    TechNewsComponent,
    WallStreetNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
