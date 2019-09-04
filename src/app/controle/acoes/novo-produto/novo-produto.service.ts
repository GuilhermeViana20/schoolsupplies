import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/produtos/produtos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Loja } from 'src/app/lojas/lojas.model';

@Injectable({
  providedIn: 'root'
})
export class NovoProdutoService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    
  }

  cadastro(produto: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>(`http://localhost:3000/produtos`, produto)
  }

  obterFkProdutos(): Observable<Loja[]>{
    return this.http.get<Loja[]>(`http://localhost:3000/lojas`);
}

}