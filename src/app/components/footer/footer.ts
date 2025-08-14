import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      {{ text }}
    </footer>
  `,
  styles: [`
    .footer {
      background: #242424;
      color: #fff;
      text-align: center;
      padding: 10px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  `]
})

export class Footer {
  @Input() text = 'Portfolio - XXX - 2025';
}