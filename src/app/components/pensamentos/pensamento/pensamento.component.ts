import { Component, Input, OnInit } from '@angular/core';
import type { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "Angular",
    autoria: "Raí",
    modelo: "modelo2"
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 250) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
