import { CategoryFormComponent } from './category-form/category-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';


const categoryRoutes: Routes = [
  {
    path: 'categories', component: CategoryComponent, children: [
      { path: 'new', component: CategoryFormComponent },
      { path: ':id', component: CategoryFormComponent },
      { path: ':id/edit', component: CategoryFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
