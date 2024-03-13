import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos-routing.module';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';



@NgModule({
  declarations: [
    ListarAlunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
