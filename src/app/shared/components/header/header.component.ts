import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('document:keydown./', ['$event'])
  keyDownHandler (event: KeyboardEvent) {
    console.log('in handler');
    event.preventDefault();

    (this.renderer.selectRootElement('.header__search-input') as HTMLFormElement).focus();
  }

  destroy$: Subject<void> = new Subject<void>();
  search: FormControl<string> = new FormControl<string>('', { nonNullable: true });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  redirectToSearch (value: string) {
    if (value) {
      this.router.navigate(['home', 'games'], {relativeTo: this.route, queryParamsHandling: 'merge', queryParams: {query: value}});

      return;
    }

    this.router.navigate(['home', 'games'])
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      this.search.setValue(params['query']);
    });
  }
}
