import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./layout/layout.module').then((m)=> m.LayoutModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    loadChildren:() => import('./components/not-found/not-found.module').then((m)=> m.NotFoundModule),
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
