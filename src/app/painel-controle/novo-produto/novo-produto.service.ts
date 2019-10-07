import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loja } from 'src/app/lojas/loja/loja.model';
import { Produtos } from './produto.model'
import { DIMENSIVA_API } from 'src/app/app.api'

@Injectable({
  providedIn: 'root'
})
export class NovoProdutoService {

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  cadastro(produto: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>(`${DIMENSIVA_API}/produto`, produto)
  }

  obterFkProdutos(): Observable<Loja[]>{
    return this.http.get<Loja[]>(`${DIMENSIVA_API}/lojas`);
  }
}
