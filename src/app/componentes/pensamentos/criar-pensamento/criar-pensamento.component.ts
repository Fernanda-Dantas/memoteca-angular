import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.component.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent {


  formulario!: FormGroup;
  
  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ["modelo1"]
    })
   }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listar-pensamento'])
    });
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }

}
