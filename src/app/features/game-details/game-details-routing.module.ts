import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './game-details.component';
import {AboutComponent} from "./pages/about/about.component";
import {ScreenshotsComponent} from "./pages/screenshots/screenshots.component";
import {TrailersComponent} from "./pages/trailers/trailers.component";
import {SearchPageComponent} from "../home/pages/search-page/search-page.component";

const routes: Routes = [
  {path: '', component: GameDetailsComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'screenshots', component: ScreenshotsComponent },
    { path: 'trailers', component: TrailersComponent },
      { path: 'search', component: SearchPageComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameDetailsRoutingModule { }
