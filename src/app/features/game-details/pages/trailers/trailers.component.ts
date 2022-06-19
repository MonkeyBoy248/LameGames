import { Component, OnInit } from '@angular/core';
import {Trailer} from "../../../../shared/interfaces/game";
import {Subscription} from "rxjs";
import {Store} from "@ngxs/store";
import {GameSelectors} from "../../../../../shared/state/game/game.selectors";

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss']
})
export class TrailersComponent implements OnInit {
  trailers: Trailer[];
  trailerSub: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.trailerSub = this.store.select(GameSelectors.getGameTrailers)
      .subscribe(
      trailers => this.trailers = trailers)
  }
}
