import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GerenciarVendas } from './gerenciar-vendas.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GerenciarVendasService {

  constructor(private http: HttpClient) { }

  listaDeVendas(): Observable<GerenciarVendas[]>{
    return this.http.get<GerenciarVendas[]>(`http://localhost:3000/vendas`);
  }

  remover(venda: GerenciarVendas): Observable<GerenciarVendas>{
    return this.http.delete<GerenciarVendas>(`http://localhost:3000/vendas/${venda.id}`);
  }
}
