import { Injectable } from '@angular/core';
import { Loja } from 'src/app/lojas/loja/loja.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciarLojasService {

  constructor(private http: HttpClient) { }

  listaDeLojas(): Observable<Loja[]>{
    return this.http.get<Loja[]>(`http://localhost:3000/lojas`);
  }

  atualizar(loja: Loja): Observable<Loja>{
    return this.http.put<Loja>(`http://localhost:3000/lojas/${loja.id}`, loja);
  }

  remover(loja: Loja): Observable<Loja>{
    return this.http.delete<Loja>(`http://localhost:3000/lojas/${loja.id}`);
  }
}
