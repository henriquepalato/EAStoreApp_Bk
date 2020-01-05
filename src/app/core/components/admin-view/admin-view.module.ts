import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdminViewComponent } from './admin-view.component';
import { UserMenuComponent } from './../structure/user-menu/user-menu.component';
import { FullScreenComponent } from './../structure/fullscreen/fullscreen.component';

@NgModule({
  declarations: [AdminViewComponent, UserMenuComponent, FullScreenComponent],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class AdminViewModule { }
