import { Component, OnInit } from '@angular/core';
import {Screenshot} from "../../../../shared/interfaces/game";
import {Subscription} from "rxjs";
import {Renderer2} from "@angular/core";
import {Store} from "@ngxs/store";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {
  gameScreenshots: Screenshot[];
  screenshotsSub: Subscription;
  activeIndex = 0;
  isFullScreenOpen = false;
  fullSizeSrc = '';

  constructor(private store: Store,  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.screenshotsSub = this.store.select(GameSelectors.getGameScreenshots).subscribe(screenshots => {
      this.gameScreenshots = screenshots;
    })
  }

  openFullScreen (src: string, index: number) {
    this.activeIndex = index;
    this.isFullScreenOpen = true;
    this.fullSizeSrc = src;
    this.renderer.addClass(document.body, '_block');
    console.log('active', this.activeIndex);
  }

  closeFullScreen () {
    this.isFullScreenOpen = false;
    this.fullSizeSrc = '';
    this.renderer.removeClass(document.body, '_block');
  }
}
