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
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MainContentComponent,
    CardGameComponent,
    CardDevComponent,
    IntegerFormatPipe,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    ArraySortPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    IntegerFormatPipe,
    MainContentComponent,
    CardDevComponent,
    HeaderComponent,
    NavigationComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
