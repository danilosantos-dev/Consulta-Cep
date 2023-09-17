import { Component } from '@angular/core';
import { ViacepService } from 'src/app/services/viacep.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  cep: string = '';
  logradouro: string = '';
  complemento: string = '';
  bairro: string = '';
  localidade: string ='';
  uf: string = '';


  constructor( private cepService: ViacepService) {}

  ngOnInit() {
  }

  consultarCep() {
    this.cepService.getByCep(this.cep).subscribe({
      next: (endereco: any) => {
        this.cep = endereco.cep;
        this.logradouro = endereco.logradouro;
        this.complemento = endereco.complemento;
        this.bairro = endereco.bairro;
        this.localidade = endereco.localidade;
        this.uf = endereco.uf;

        console.log(this.cep);
      },
      error: (error) => console.log(error),
    });
  }

  limpar(){
    this.cep = '';
    this.logradouro = '';
    this.complemento = '';
    this.logradouro = '';
    this.bairro = '';
    this.localidade = '';
    this.uf = '';
  }



}
