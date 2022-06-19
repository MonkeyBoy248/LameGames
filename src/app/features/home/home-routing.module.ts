import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {GamesPageComponent} from "./pages/games-page/games-page.component";
import {DevPageComponent} from "./pages/dev-page/dev-page.component";
import {GamePlatformsPageComponent} from "./pages/game-platforms-page/game-platforms-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'games', component: GamesPageComponent },
    { path: 'developers', component: DevPageComponent},
    { path: 'platforms', component: GamePlatformsPageComponent},
    { path: 'search', component: SearchPageComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
