import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

    listaDeProdutos(): Observable<Produtos[]>{
        return this.http.get<Produtos[]>(`http://localhost:3000/produtos`);
    }

}