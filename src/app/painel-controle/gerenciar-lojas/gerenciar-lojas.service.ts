import { Injectable } from '@angular/core';
import { Loja } from 'src/app/lojas/loja/loja.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DIMENSIVA_API } from 'src/app/app.api'

@Injectable({
  providedIn: 'root'
})
export class GerenciarLojasService {

  constructor(private http: HttpClient) { }

  listaDeLojas(): Observable<Loja[]>{
    return this.http.get<Loja[]>(`${DIMENSIVA_API}/lojas`);
  }

  atualizar(loja: Loja): Observable<Loja>{
    return this.http.put<Loja>(`${DIMENSIVA_API}/lojas/${loja.id}`, loja);
  }

  remover(loja: Loja): Observable<Loja>{
    return this.http.delete<Loja>(`${DIMENSIVA_API}/lojas/${loja.id}`);
  }
}
