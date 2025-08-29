import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.css', '../navbar.css']
})

export class PaginaInicial implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Assistente de TI júnior',
        p: 'Tribunal de Contas do Estado de Minas Gerais | abr de 2025 - atualmente',
      },
      text: "Participei da atuação no projeto de melhorias no Sistema de Gestão e Administração de Processos (SGAP), utilizando conhecimentos em linguagens como C# e JavaScript, além do framework ASP .NET Core. Trabalhei com banco de dados Oracle e utilizei a ferramenta Visual Studio (versão 10 ou superior) para o desenvolvimento. O projeto foi conduzido com base em metodologias ágeis, como Scrum e Kanban, garantindo maior eficiência e colaboração nas entregas.",
    },
    {
      summary: {
        strong: 'Estagiário de desenvolvimento',
        p: 'Tribunal de Contas do Estado de Minas Gerais | mai de 2024 - abr de 2025',
      },
      text: "Manutenção e desenvolvimento de sistemas em modelo MVC, utilizando do framework ASP.NET Core/C#, JavaScript e Oracle Database.",
    }
  ]);

  constructor() {}

  ngAfterViewInit(): void {
    const detailsElements = document.querySelectorAll<HTMLDetailsElement>('.experiencias details');
    detailsElements.forEach(det => {
      det.addEventListener('toggle', () => {
        if (det.open) {
          setTimeout(() => {
            det.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 200);
        }
      });
    });
  }
}