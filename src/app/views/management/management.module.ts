
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
// import { CategoryRoutingModule } from './category/category-routing.module';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    // CategoryRoutingModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
