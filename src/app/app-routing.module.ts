import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./Auth/login/login.module').then(m => m.LoginModule) },
  { path: 'forgot', loadChildren: () => import('./Auth/forgot/forgot.module').then(m => m.ForgotModule) },
  { path: 'reset', loadChildren: () => import('./Auth/reset/reset.module').then(m => m.ResetModule) },
  { path: 'registration', loadChildren: () => import('./Auth/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'navbar', loadChildren: () => import('./components/navbar/navbar.module').then(m => m.NavbarModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
