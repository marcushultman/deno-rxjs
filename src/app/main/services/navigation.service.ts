import { Injectable } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class NavigationService {

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private location: Location
  ) {}

  public navigate(route): void {
    this.router.navigate(['/' + route]);
    this.sidebarService.toggleSidebar(false);
  }
}
