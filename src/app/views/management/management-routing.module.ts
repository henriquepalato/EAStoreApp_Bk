import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const managementRoutes: Routes = [
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(managementRoutes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
