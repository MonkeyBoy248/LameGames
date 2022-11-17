import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../../../shared/interfaces/game";
import {SortOption} from "../../models/sortOption";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.scss']
})

export class FilterSelectorComponent implements OnInit {
  @Input() allGames: Game[];
  @Output() setOrderingEvent = new EventEmitter<string>();

  isOpen = false;
  currentOption: string;
  optionMap: SortOption = {
    'Name': 'name',
    'Rating': 'metacritic',
    'Release date': 'released'
  };
  optionText: string;
  dropdownOptions: string[] = [
    'Name',
    'Release date',
    'Rating'
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit (): void {
    this.initializeSortOption();
    this.setOptionText();
  }

  showDropdown (): void {
    this.isOpen = !this.isOpen;
  }

  setOptionText (): void {
    this.optionText = Object.entries(this.optionMap).find(entry => entry.includes(this.currentOption))![0];
  }

  setCurrentOption (option: string) {
    this.currentOption = option;
    this.setOptionText();
  }

  initializeSortOption () {
    this.currentOption = this.route.snapshot.queryParamMap.get('filter') ?? 'name';
  }

  setOrdering (option: string) {
    this.setCurrentOption(this.optionMap[option]);
    this.router.navigate([], {relativeTo: this.route, queryParamsHandling: 'merge', queryParams: {filter: this.currentOption}}).then();

    this.isOpen = false;
  }
}
