import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento/pensamento.component.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: ["modelo1"]
    })
   }

  criarPensamento() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }

}
