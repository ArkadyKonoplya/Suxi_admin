import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/interceptors/auth.guard';
import { Role } from './core/models/user';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full',
  },
  { path: 'dashbord', loadChildren: () => import('../app/modules/general/dashbord/dashbord.module').then(m => m.DashbordModule), canActivate: [AuthGuard], data: { roles: [Role.Admin,Role.Customer] },},
 { path: 'account', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },
 { path: 'error', loadChildren: () => import('../app/shared/components/forbidden-error/forbidden-error.module').then(m => m.ForbiddenErrorModule) },


  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
