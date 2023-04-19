import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RoleGuard } from '../guards/role.guard';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'prefix',
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./productos/productos.module').then((m) => m.ProductosModule),
      },
      {
        path: 'preguntas',
        loadChildren: () =>
          import('./preguntas/preguntas.module').then((m) => m.PreguntasModule),
      },
      {
        path: 'carrito',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./../components/not-found/not-found.module').then(
            (m) => m.NotFoundModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
