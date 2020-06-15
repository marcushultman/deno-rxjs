import { Component, Input, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'rxjs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  menuView = false;
  navigationList = [];

  constructor(
    private toolbarService: ToolbarService,
    private progressBar: ProgressBarService,
    private matStackBar: MatSnackBar,
    private sideBarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.progressBar.show();
    this.toolbarService.getNavigation().subscribe({
      next: (data) => {
        this.navigationList = data.NavBar;
      },
      error: (data) => {
        console.error(data);
      },
      complete: () => {
        this.progressBar.hide();
      }
    });
    this.sideBarService.sidebar.subscribe({
      next: (data) => {
        this.menuView = data;
      }
    });
  }

  menuToggle(): void {
    this.sideBarService.toggleSidebar();
  }
}
