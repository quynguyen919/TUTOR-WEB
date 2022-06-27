import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
<<<<<<< HEAD
    path: 'admin/profile',
=======
    path: 'adminprofile',
>>>>>>> 0d13eec0fdef64720a924a50db248459816bae87
    loadChildren: () =>
      import('./Pages/admin/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
<<<<<<< HEAD
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
    path: 'profile-customer',
    loadChildren: () =>
      import('./Pages/profile-customer/profile-customer.module').then(
        (m) => m.ProfileCustomerModule
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
=======
  { path: 'profile-customer', loadChildren: () => import('./Pages/profile-customer/profile-customer.module').then(m => m.ProfileCustomerModule) },
  {
    path: 'customer',
    loadChildren: () =>
      import('../app/Pages/customer/customer.module').then((m) => m.CustomerModule),
  },

  { path: 'profile-customer', loadChildren: () => import('./Pages/profile-customer/profile-customer.module').then(m => m.ProfileCustomerModule) },
  
  { path: 'log-in', loadChildren: () => import('./Pages/log-in/log-in.module').then(m => m.LogInModule) },

  { path: 'Tutor-seeking', loadChildren: () => import('./Pages/tutor-seeking/tutor-seeking.module').then(m => m.TutorSeekingModule) },

>>>>>>> 0d13eec0fdef64720a924a50db248459816bae87
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
