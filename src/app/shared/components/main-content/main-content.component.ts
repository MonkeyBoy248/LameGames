import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  @Input() data!: any;
  @Input() isGrid: boolean = true;

  sortingOption$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sortingOption$ = this.route.queryParamMap.pipe(
      map((params) => {
        if (!params.get('filter')) {
          return 'name'
        }

        return params.get('filter')!
      }),
      tap(param => console.log(param))
    )
  }

  trackById (index: number, data: any): number {
    return data.id;
  }
}
