import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Fer Dev',
    modelo: ''

  }

  constructor() {}

  ngOnInit(): void {}

}
