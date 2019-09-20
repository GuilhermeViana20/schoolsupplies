import { Injectable } from '@angular/core';
import { Loja } from './loja/loja.model';
import { DIMENSIVA_API } from '../app.api'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoItem } from '../loja-detail/produto-item/produto-item.model';

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(private http: HttpClient) { }

  obterLojas(): Observable<Loja[]>{
    return this.http.get<Loja[]>(`${DIMENSIVA_API}/lojas`)
  }

  obterLojasPeloId(id: string): Observable<Loja>{
    return this.http.get<Loja>(`${DIMENSIVA_API}/lojas/${id}`)
  }

  obterProdutoDeLoja(id: string): Observable<ProdutoItem[]>{
    return this.http.get<ProdutoItem[]>(`${DIMENSIVA_API}/lojas/${id}/produto`)
  }
}
