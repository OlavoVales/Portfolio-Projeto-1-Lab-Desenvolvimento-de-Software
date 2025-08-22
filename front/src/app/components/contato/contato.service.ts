// contato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContato } from './Icontato';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private apiUrl = 'https://localhost:5001/api/contato';

  constructor(private http: HttpClient) {}

  enviarEmail(contato: IContato): Observable<any> {
    return this.http.post(this.apiUrl, contato);
  }
}
