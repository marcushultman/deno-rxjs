import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MenuItemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuItemModule { }
