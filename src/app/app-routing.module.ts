import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleNewsComponent } from './apple-news/apple-news.component';
import { TopBusniessUsNewsComponent } from './top-busniess-us-news/top-busniess-us-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TeslaNewsComponent } from './tesla-news/tesla-news.component';
import { WallStreetNewsComponent } from './wall-street-news/wall-street-news.component';

const routes: Routes = [
  {
    path: '',
    component: TopBusniessUsNewsComponent
  },
  {
    path: 'apple-news',
    component: AppleNewsComponent
  },
  {
    path: 'tech-news',
    component: TechNewsComponent,
  },
  {
    path: 'tesla-news',
    component: TeslaNewsComponent
  },
  {
    path: 'wall-street-news',
    component: WallStreetNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
