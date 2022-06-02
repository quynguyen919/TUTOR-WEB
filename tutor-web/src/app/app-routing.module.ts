import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'adminprofile',
    loadChildren: () =>
      import('./Pages/admin/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('../app/Pages/customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: 'profile-customer', loadChildren: () => import('./Pages/profile-customer/profile-customer.module').then(m => m.ProfileCustomerModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
