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
    {
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam tenetur voluptas, inventore fuga cumque eveniet maiores consequatur molestiae voluptates sed possimus non dolores expedita temporibus praesentium! Impedit, earum ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam tenetur voluptas, inventore fuga cumque eveniet maiores consequatur molestiae voluptates sed possimus non dolores expedita temporibus praesentium! Impedit, earum ullam.',
      autoria: 'Raí',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
