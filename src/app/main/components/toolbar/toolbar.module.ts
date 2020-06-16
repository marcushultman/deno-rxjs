import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
} from '@angular/core'
import { ToolbarComponent } from './toolbar.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ToolbarService } from './toolbar.service'
import { HttpClient, HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
    ],
    providers: [ToolbarService],
    exports: [ToolbarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolbarModule {}
