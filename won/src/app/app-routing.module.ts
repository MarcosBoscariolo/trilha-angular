import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./games/games.module').then(module => module.GamesModule)
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
