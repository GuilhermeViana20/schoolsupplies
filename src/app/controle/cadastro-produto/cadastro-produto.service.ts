import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../../produtos/produtos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {

  constructor( private http: HttpClient) { }

  atualizar(produto: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(`http://localhost:3000/produtos/${produto.id}`, produto)
  }

  remover(produto: Produtos): Observable<Produtos>{
    return this.http.delete<Produtos>(`http://localhost:3000/produtos/${produto.id}`);
  }
}
