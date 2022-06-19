import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  @Input() data!: any;
  @Input() isGrid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  trackById (index: number, data: any): number {
    return data.id;
  }
}
