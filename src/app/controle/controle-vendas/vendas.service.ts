import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from './vendas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient) { }

  listaDeVendas(): Observable<Venda[]>{
    return this.http.get<Venda[]>(`http://localhost:3000/vendas`);
  }

  remover(venda: Venda): Observable<Venda>{
    return this.http.delete<Venda>(`http://localhost:3000/vendas/${venda.id}`);
  }
}
