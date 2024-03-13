import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AlunosRoutingModule } from './alunos-routing.module';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';



@NgModule({
  declarations: [
    ListarAlunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule
  ]
})
export class AlunosModule { }
