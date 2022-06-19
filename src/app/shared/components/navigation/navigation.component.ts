import { Component, OnInit } from '@angular/core';

export interface NavigationItem {
  link: string,
  title: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navItems: NavigationItem[] = [
    {
      link: '/home/games',
      title: 'Games'
    },
    {
      link: '/home/developers',
      title: 'Developers'
    },
    {
      link: '/home/platforms',
      title: 'Platforms'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
