import { Component, ViewChild, OnInit } from '@angular/core';
import { SidebarService } from './main/services/sidebar.service';
import { MatDrawer } from '@angular/material/sidenav';
import { ToolbarService } from './main/components/toolbar/toolbar.service';
import { ProgressBarService } from './main/components/progress-bar/progress-bar.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'rxjs',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    sidebarItems = [];
    url = '';
    @ViewChild(MatDrawer) sidebar: MatDrawer;

    constructor(
        private sidebarService: SidebarService,
        private toolbarService: ToolbarService,
        private progressBar: ProgressBarService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.progressBar.show();
        this.activatedRoute.url.subscribe((segments: UrlSegment[]) => {
            this.url = segments.join('/');
        });
        this.toolbarService.getNavigation().subscribe({
            next: (data) => {
                this.sidebarItems = data.SideBar;
            },
            error: (data) => {
                console.error(data);
            },
            complete: () => {
                this.progressBar.hide();
            },
        });
        this.sidebarService.toggle.subscribe({
            next: (value) => {
                if (this.sidebar) {
                    this.sidebar.toggle(value);
                }
            },
        });
    }
}
