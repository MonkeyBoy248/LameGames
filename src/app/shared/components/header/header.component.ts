import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
 @ViewChild('search') searchInput: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) { }

  redirectToSearch (value: string) {
    console.log('Wtf');
    if (value) {
      this.router.navigate(['home', 'search'], {queryParams: {query: value}});
    }
  }

  setInputValue () {
    this.route.queryParams.subscribe(params => {
      if (params['query']) {
        this.searchInput.nativeElement.value = params['query'];
      }
    });
  }

  isTransparent (): boolean {
    if (this.router.url.includes('details')) {
      return true;
    }

    return false;
  }

  ngAfterViewInit () {
    this.setInputValue();
  }

  ngOnInit(): void {
  }

}
