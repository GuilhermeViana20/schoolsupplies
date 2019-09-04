import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loja } from 'src/app/lojas/lojas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroLojaService {

  constructor( private http: HttpClient) { } 

  atualizar(loja: Loja): Observable<Loja>{
    return this.http.put<Loja>(`http://localhost:3000/lojas/${loja.id}`, loja);
  }

  remover(loja: Loja): Observable<Loja>{
    return this.http.delete<Loja>(`http://localhost:3000/lojas/${loja.id}`);
  }
}
