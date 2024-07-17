import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../services/UsuarioService';
import { Usuario } from '../models/Usuario';

@Component({
  standalone: true,
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UsuarioFormComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: [''],
      receberEmail: [false],
      permitirNotificacoes: [false],
      dataCadastro: [new Date().toISOString().split('T')[0]]
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = this.usuarioForm.value;
      this.usuarioService.criarUsuario(usuario).subscribe({
        next: (response) => {
          console.log('Usuário criado com sucesso!', response);
          // Você pode adicionar uma lógica para limpar o formulário ou redirecionar o usuário
        },
        error: (error) => {
          console.error('Erro ao criar usuário', error);
        }
      });
    }
  }
}
