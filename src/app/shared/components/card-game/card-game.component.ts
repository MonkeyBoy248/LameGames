import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Game} from "../../interfaces/game";

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {
  constructor(private router: Router) { }

  showGameDetails (id: number) {
    this.router.navigate(['details', id, 'about']);
  }

  ngOnInit(): void {
  }

  @Input() game: Game;
}
