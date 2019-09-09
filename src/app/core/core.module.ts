import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticateViewComponent } from './components/authenticate-view/authenticate-view.component';
import { AdminViewModule } from './components/admin-view/admin-view.module';

@NgModule({
  declarations: [
    AuthenticateViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminViewModule
  ]
})
export class CoreModule { }
