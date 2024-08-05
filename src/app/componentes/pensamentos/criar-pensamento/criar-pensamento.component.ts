import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Fer Dev',
    modelo: ''

  }

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    console.log('Novo pensamento criado!')
  }

  cancelar() {
    console.log('Cancelado!')
  }

}
