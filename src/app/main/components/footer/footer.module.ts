import {
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
} from '@angular/core'
import { FooterComponent } from './footer.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [FooterComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
    ],
    exports: [FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterModule {}
