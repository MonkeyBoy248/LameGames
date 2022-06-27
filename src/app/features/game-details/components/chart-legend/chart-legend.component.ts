import {Component, Input, OnInit} from '@angular/core';
import {Ratings} from "../../../../shared/interfaces/game";
import {Colors} from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-chart-legend',
  templateUrl: './chart-legend.component.html',
  styleUrls: ['./chart-legend.component.scss']
})
export class ChartLegendComponent implements OnInit {
  @Input() chartData: Ratings[];
  @Input() sectionColors: Colors;
  constructor() { }

  ngOnInit(): void {
  }

}
