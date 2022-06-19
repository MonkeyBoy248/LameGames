import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import {TabsComponent} from "./pages/tabs/tabs.component";
import {AboutComponent} from "./pages/about/about.component";
import {TrailersComponent} from "./pages/trailers/trailers.component";
import {ScreenshotsComponent} from "./pages/screenshots/screenshots.component";
import {SharedModule} from "../../shared/shared.module";
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    GameDetailsComponent,
    TabsComponent,
    AboutComponent,
    TrailersComponent,
    ScreenshotsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    SharedModule,
  ]
})
export class GameDetailsModule { }
