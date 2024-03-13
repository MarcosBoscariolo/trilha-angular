import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';

const routes: Routes = [
  {
    path: "",
    component: ListarAlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
