import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main.module').then((m) => m.MainModule),
    },
    {
        path: 'guide',
        loadChildren: () =>
            import('./docs/docs.module').then((m) => m.DocsModule),
    },
    { path: '**', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class PagesModule {}
