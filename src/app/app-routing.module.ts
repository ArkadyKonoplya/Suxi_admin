import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/interceptors/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account',
    pathMatch: 'full',
  },
  { path: 'dashbord', loadChildren: () => import('../app/modules/general/dashbord/dashbord.module').then(m => m.DashbordModule),canActivate: [AuthGuard] },
 { path: 'account', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule) },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
