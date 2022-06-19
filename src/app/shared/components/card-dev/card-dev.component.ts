import {Component, Input, OnInit} from '@angular/core';
import {Creator} from "../../interfaces/creator";

@Component({
  selector: 'app-card-dev',
  templateUrl: './card-dev.component.html',
  styleUrls: ['./card-dev.component.scss']
})
export class CardDevComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input() dev!: Creator;
}
