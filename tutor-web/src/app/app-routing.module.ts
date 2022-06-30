import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin/profile',
    loadChildren: () =>
      import('./Pages/admin/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'profile-customer',
    loadChildren: () =>
      import('./Pages/profile-customer/profile-customer.module').then(
        (m) => m.ProfileCustomerModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('../app/Pages/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./Pages/log-in/log-in.module').then((m) => m.LogInModule),
  },

  {
    path: 'Tutor-seeking',
    loadChildren: () =>
      import('./Pages/tutor-seeking/tutor-seeking.module').then(
        (m) => m.TutorSeekingModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Pages/admin/home/home.module').then((m) => m.HomeModule),
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
