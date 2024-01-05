import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Angular 2',
      autoria: 'Raí',
      modelo: 'modelo2',
    },
    {
      conteudo: 'React',
      autoria: 'Raí',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Next',
      autoria: 'Raí',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
