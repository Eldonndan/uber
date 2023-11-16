import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

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
    canActivate: [NoIngresadoGuard],
    loadChildren: () =>
      import('./paginas/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    canActivate: [NoIngresadoGuard],
    loadChildren: () =>
      import('./paginas/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forgetpassword',
    canActivate: [NoIngresadoGuard],
    loadChildren: () =>
      import('./paginas/forgetpassword/forgetpassword.module').then(
        (m) => m.ForgetpasswordPageModule
      ),
  },
  {
    path: 'new-vehicle',
    loadChildren: () => import('./paginas/new-vehicle/new-vehicle.module').then( 
      m => m.NewVehiclePageModule
      )
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
    path: 'detalle-ruta',
    loadChildren: () => import('./paginas/detalle-ruta/detalle-ruta.module').then( 
      m => m.DetalleRutaPageModule)
  },
  
  {
    path: 'detalle-conductor',
    loadChildren: () => import('./paginas/detalle-conductor/detalle-conductor.module').then( m => m.DetalleConductorPageModule)
  },

  {
    path: 'armar-ruta',
    loadChildren: () => import('./paginas/armar-ruta/armar-ruta.module').then( m => m.ArmarRutaPageModule)
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
