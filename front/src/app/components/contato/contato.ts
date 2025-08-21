import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contato',
  imports: [RouterModule, Footer],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}