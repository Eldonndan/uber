import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./paginas/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./paginas/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forgetpassword',
    loadChildren: () =>
      import('./paginas/forgetpassword/forgetpassword.module').then(
        (m) => m.ForgetpasswordPageModule
      ),
  },
  {
    path: 'options',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/options/options.module').then(
        (m) => m.OptionsPageModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./paginas/error-page/error-page.module').then(
        (m) => m.ErrorPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
