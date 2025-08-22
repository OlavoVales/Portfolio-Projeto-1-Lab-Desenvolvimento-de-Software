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
  contato: IContato = {Email: '', Assunto: '', Mensagem: '' };
  constructor(private contatoService: ContatoService) {}

  enviarFormulario() {  
  this.contatoService.enviarEmail(this.contato).subscribe({
    next: (res) => {
      console.log('Sucesso:', res);
      alert('Mensagem enviada com sucesso!');
      this.contato = {Email: '', Assunto: '', Mensagem: '' };
    },
    error: (err) => {
      console.error('Erro completo:', err);
      if (err.error instanceof ErrorEvent) {
        console.error('Erro do cliente:', err.error.message);
      } else {
        console.error(`Código do erro: ${err.status}, `);
        console.error('Resposta do servidor:', err.error);
      }
      alert('Erro ao enviar mensagem. Verifique o console para detalhes.');
    }
  });
}
}