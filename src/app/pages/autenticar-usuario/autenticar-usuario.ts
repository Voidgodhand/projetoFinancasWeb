import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './autenticar-usuario.html',
  styleUrl: './autenticar-usuario.css'
})
export class AutenticarUsuario {

  //injeção de dependência
  http = inject(HttpClient);

  //estrutura do formulário
  form = new FormGroup({
    email : new FormControl(''), //campo email
    senha : new FormControl('') //campo senha
  });

  //função para executar o evento 'submit' do formulário
  onSubmit() {
    //fazendo uma requisição para a API de usuários
    this.http.post('http://localhost:8082/api/v1/usuario/autenticar', this.form.value)
      .subscribe((response) => { //capturando o retorno da API
        console.log(response); //imprimindo no console
      })
  }
}
