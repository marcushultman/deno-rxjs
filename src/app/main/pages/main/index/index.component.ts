import { Component } from '@angular/core';
import { NavigationService } from 'src/app/main/services/navigation.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
    title = 'RxJS Deno';
    constructor(private navigationService: NavigationService) {}

    go(routename: string): void {
        this.navigationService.navigate(routename);
    }
}
