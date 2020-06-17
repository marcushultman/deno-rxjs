import { Component, Input, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SidebarService } from '../../services/sidebar.service';
import { NavigationService } from '../../services/navigation.service';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';

@Component({
    selector: 'rxjs-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition(
                'expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ]),
        trigger('enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate(
                    '200ms',
                    style({ transform: 'translateX(0)', opacity: 1 })
                ),
            ]),
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate(
                    '200ms',
                    style({ transform: 'translateX(100%)', opacity: 0 })
                ),
            ]),
        ]),
    ],
})
export class ToolbarComponent implements OnInit {
    menuView = false;
    navigationList = [];

    constructor(
        private toolbarService: ToolbarService,
        private progressBar: ProgressBarService,
        private matStackBar: MatSnackBar,
        private sideBarService: SidebarService,
        private navigationService: NavigationService
    ) {}

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
            },
        });
        this.sideBarService.sidebar.subscribe({
            next: (data) => {
                this.menuView = data;
            },
        });
    }

    menuToggle(): void {
        this.sideBarService.toggleSidebar();
    }

    go(routename: string): void {
        this.sideBarService.toggleSidebar(false);
        this.navigationService.navigate(routename);
    }
}
