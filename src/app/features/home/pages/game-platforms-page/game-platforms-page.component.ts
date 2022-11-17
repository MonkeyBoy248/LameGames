import { Component, OnInit } from '@angular/core';
import {Card} from "../../../../core/interfaces/card";
import {CardTypeEnum, Platform} from "../../../../shared/interfaces/game";
import {GamePlatformsService} from "../../../../core/services/game-platforms/game-platforms.service";
import { Select } from '@ngxs/store';
import { GameSelectors } from '../../../../../shared/state/game/game.selectors';
import { Observable } from 'rxjs';

export interface PlatformCard extends Card {
  results: Array<Platform>
}

@Component({
  selector: 'app-game-platforms-page',
  templateUrl: './game-platforms-page.component.html',
  styleUrls: ['./game-platforms-page.component.scss']
})
export class GamePlatformsPageComponent implements OnInit {
  @Select(GameSelectors.getLoadingStatus)
  isLoading$: Observable<boolean>;

  private allPlatformRequest = 'platforms';
  platformCard: PlatformCard = {cardType: CardTypeEnum.platform, results: []};
  title = 'Platforms';


  constructor(private gamePlatformsService: GamePlatformsService) { }

  ngOnInit(): void {
    this.getAllPlatforms();
  }

  getAllPlatforms () {
    this.gamePlatformsService.getAllPlatforms(this.allPlatformRequest).subscribe(platforms => {
      this.platformCard.results = platforms;
    })
  }



}
