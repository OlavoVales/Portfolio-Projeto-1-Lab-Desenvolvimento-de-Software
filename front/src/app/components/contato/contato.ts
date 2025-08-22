import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { ContatoService } from './contato.service';
import { IContato } from './Icontato';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [RouterModule, Footer, CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  contato: IContato = {email: '', assunto: '', mensagem: '' };
  constructor(private contatoService: ContatoService) {}

  enviarFormulario() {  
    this.contatoService.enviarEmail(this.contato).subscribe({
      next: (res) => {
        console.log(res);
        alert('Mensagem enviada com sucesso!');
        this.contato = {email: '', assunto: '', mensagem: '' }; // limpar formulário
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao enviar mensagem.');
      }
    });
  }
}