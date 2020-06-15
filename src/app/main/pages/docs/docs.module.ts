import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { DocsService } from './docs.service';
import { MarkdownModule } from 'ngx-markdown';
import {UseMarkdownModule} from '@use-angular/markdown';

const routes: Routes = [
    {
        path: '',
        component: DocsComponent
    },
    {
        path: '**',
        component: DocsComponent
    }
];
@NgModule({
    declarations: [
        DocsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MarkdownModule.forRoot(),
        UseMarkdownModule
    ],
    providers: [
        DocsService
    ]
})
export class DocsModule { }
