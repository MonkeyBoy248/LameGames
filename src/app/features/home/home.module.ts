import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {GamesPageComponent} from "./pages/games-page/games-page.component";
import {GamePlatformsService} from "../../core/services/game-platforms/game-platforms.service";
import {GamePlatformsPageComponent} from "./pages/game-platforms-page/game-platforms-page.component";
import {DevPageComponent} from "./pages/dev-page/dev-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {FilterSelectorComponent} from "./components/filter-selector/filter-selector.component";


@NgModule({
  declarations: [
    HomeComponent,
    GamesPageComponent,
    GamePlatformsPageComponent,
    DevPageComponent,
    SearchPageComponent,
    FilterSelectorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
