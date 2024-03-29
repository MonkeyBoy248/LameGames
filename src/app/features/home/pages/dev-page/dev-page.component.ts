import {Component, OnInit} from '@angular/core';
import {Creator} from "../../../../shared/interfaces/creator";
import {Card} from "../../../../core/interfaces/card";
import {CardTypeEnum} from "../../../../shared/interfaces/game";
import {DevelopersService} from "../../../../core/services/developers/developers.service";
import { Select } from '@ngxs/store';
import { GameSelectors } from '../../../../../shared/state/game/game.selectors';
import { Observable } from 'rxjs';

export interface DevCard extends Card {
  results: Creator[];
}

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  @Select(GameSelectors.getLoadingStatus)
  isLoading$: Observable<boolean>;

  allDevsRequest = 'developers';
  card: DevCard = {cardType: CardTypeEnum.dev, results: []};
  title = 'Developers';

  constructor(private devService: DevelopersService) { }

  getAllDevs () {
    this.devService.getAllDevelopers(this.allDevsRequest).subscribe(dev => {
      this.card.results = dev;
    })
  }

  ngOnInit(): void {
    this.getAllDevs();
  }
}
