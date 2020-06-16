import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
} from '@angular/core'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { CommonModule } from '@angular/common'
import { ProgressBarService } from './progress-bar.service'
import { ProgressBarComponent } from './progress-bar.component'

@NgModule({
    declarations: [ProgressBarComponent],
    imports: [CommonModule, MatProgressBarModule],
    providers: [ProgressBarService],
    exports: [ProgressBarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProgressBarModule {}
