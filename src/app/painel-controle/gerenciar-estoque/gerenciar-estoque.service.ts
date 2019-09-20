import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoItem } from 'src/app/loja-detail/produto-item/produto-item.model';
import { Produtos } from '../novo-produto/produto.model';

@Injectable({
  providedIn: 'root'
})
export class GerenciarEstoqueService {

  constructor(private http: HttpClient) { }

  listaDeProdutos(): Observable<ProdutoItem[]>{
    return this.http.get<ProdutoItem[]>(`http://localhost:3000/produto`);
  }

  atualizar(produto: ProdutoItem): Observable<ProdutoItem>{
    return this.http.put<ProdutoItem>(`http://localhost:3000/produto/${produto.id}`, produto)
  }

  remover(produto: ProdutoItem): Observable<ProdutoItem>{
    return this.http.delete<ProdutoItem>(`http://localhost:3000/produto/${produto.id}`);
  }
}