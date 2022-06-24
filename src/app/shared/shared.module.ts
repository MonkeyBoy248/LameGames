import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { CardDevComponent } from './components/card-dev/card-dev.component';
import { IntegerFormatPipe } from './pipes/integer-format.pipe';
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainContentComponent,
    CardGameComponent,
    CardDevComponent,
    IntegerFormatPipe,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    IntegerFormatPipe,
    MainContentComponent,
    CardDevComponent,
    HeaderComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
