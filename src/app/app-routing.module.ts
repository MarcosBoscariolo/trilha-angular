import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "alunos",
    loadChildren: () => import("./features/alunos/alunos.module").then(m => m.AlunosModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "alunos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
