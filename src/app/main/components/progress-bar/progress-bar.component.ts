import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
    progressBar = false;

    constructor(private progressBarService: ProgressBarService) {}

    ngOnInit(): void {
        this.progressBarService.progressBar.subscribe({
            next: (data) => {
                this.progressBar = data;
            },
        });
    }
}
