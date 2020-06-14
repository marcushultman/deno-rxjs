import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgDocxModule, NgDocxComponent } from 'ng-docx';

const fileNames = [
  'getting started',
  { 'menu sections': ['introduction', 'example'] },
  'theming'
];

const routes: Routes = [
    {
        path: '',
        children: [{ path: '', component: NgDocxComponent }]
    }
];

@NgModule({
    imports: [
        NgDocxModule.forRoot({
            files: fileNames
        }),
        RouterModule.forChild(routes)
    ]
})
export class DocsModule {}