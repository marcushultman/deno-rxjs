import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './main/index/index.component';
import { ToolbarModule } from '../components/toolbar/toolbar.module';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: IndexComponent }],
  },
  {
    path: 'index',
    children: [{ path: '', component: IndexComponent }],
  },
  {
    path: '404',
    children: [{ path: '', component: NotFoundComponent }],
  },
];

@NgModule({
  declarations: [IndexComponent, NotFoundComponent],
  imports: [
    RouterModule.forChild(routes),
    FlexLayoutModule,
    ToolbarModule,
    FooterModule,
    MatCardModule,
  ],
})
export class MainModule {}
