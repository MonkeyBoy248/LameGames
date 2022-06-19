import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from "../../../../shared/components/navigation/navigation.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: NavigationItem[] = [
    {
      title: 'About',
      link: `about`
    },
    {
      title: 'Screenshots',
      link: `screenshots`
    },
    {
      title: 'Trailers',
      link: `trailers`
    }
    ];

  isLinkActive (element: HTMLElement): boolean {
    return element.classList.contains('active');
  }

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  @Input() id: string = '';
}
