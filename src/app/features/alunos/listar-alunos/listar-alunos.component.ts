import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {
  colunasExibidas: string[] = ['nome', 'e-mail', 'data de nascimento', 'curso', 'ações'];
  alunos: any = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosService.getAlunos().subscribe((res) => this.alunos = res)
  }

}
