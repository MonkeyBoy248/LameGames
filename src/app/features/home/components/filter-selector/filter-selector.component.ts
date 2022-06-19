import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../../../shared/interfaces/game";
import {SortService} from "../../../../core/services/sort/sort.service";
import {SortOption} from "../../models/sortOption";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.scss']
})

export class FilterSelectorComponent implements OnInit {
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

  constructor(private filterService: SortService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit (): void {
    this.initializeSortOption();
    this.setOptionText();
    console.log(this.currentOption);
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
    this.route.queryParams.subscribe(params => {
      console.log('param', params['order'])
      if (!params['order']) {
        this.currentOption = 'name';

        return;
      }

      this.currentOption = params['order'];
      console.log('current params', this.currentOption);
    })
  }

  setOrdering (option: string) {
    this.setCurrentOption(this.optionMap[option]);
    this.router.navigate([this.router.url.split('?')[0]], {queryParams: {order: this.currentOption}}).then(r => console.log('ok', this.router.url));
    // this.setOrderingEvent.emit(this.optionMap[option]);

    this.isOpen = false;
  }

  @Input() allGames: Game[];
  @Output() setOrderingEvent = new EventEmitter<string>();
}
