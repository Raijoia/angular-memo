import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private router: Router,
    private service: PensamentoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|s)*/)
          ]
        )
      ],
      autoria: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(3),
          ]
        )
      ],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  criarPensamento() {
    if(!this.formulario.valid) {
      alert("Formulário inválido!")
    }
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelarPenamento() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): String {
    if(this.formulario.valid) {
      return 'botao';
    }
    return 'botao__desabilitado';
  }
}
