import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticateViewComponent } from './components/authenticate-view/authenticate-view.component';
import { AdminViewModule } from './components/admin-view/admin-view.module';
import { CategoryModule } from '../views/management/category/category.module';

@NgModule({
  declarations: [
    AuthenticateViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminViewModule,
    CategoryModule
  ]
})
export class CoreModule { }
