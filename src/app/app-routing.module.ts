import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateViewComponent } from './core/components/authenticate-view/authenticate-view.component';
import { AdminViewComponent } from './core/components/admin-view/admin-view.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
    ]
  },
  {
    path: '',
    component: AuthenticateViewComponent,
    children: [
      {
        path: 'authenticate',
        loadChildren: './views/authenticate/authenticate.module#AuthenticateModule',
        data: { title: 'Autenticação' }
      },
      {
        path: 'login',
        redirectTo: '/authenticate/login',
        data: { title: 'Autenticação' }
      },
      {
        path: 'logout',
        redirectTo: '/authenticate/logout',
        data: { title: 'Autenticação' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
