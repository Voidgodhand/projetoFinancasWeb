import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './criar-usuario.html',
  styleUrl: './criar-usuario.css'
})
export class CriarUsuario {

  //injeção de dependência
  http = inject(HttpClient);

  //estrutura do formulário
  form = new FormGroup({
    nome : new FormControl(''), //campo nome
    email : new FormControl(''), //campo email
    senha : new FormControl(''), //campo senha
    senhaConfirmacao : new FormControl('') //campo confirmação de senha
  });

  //função para executar o evento 'submit' do formulário
  onSubmit() {
    //enviando uma requisição para cadastrar um usuário na API
    this.http.post('http://localhost:8082/api/v1/usuario/criar', this.form.value)
      .subscribe((response) => { //capturando ou guardando a resposta da API
        console.log(response); //exibindo a resposta no console
      });
  }
}
