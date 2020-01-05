import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';


@NgModule({
  declarations: [CategoryComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
