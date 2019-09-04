import { Injectable } from '@angular/core';
import { Venda } from './venda.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinalizarVendaService {

  constructor(private http: HttpClient) { }

  cadastro(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(`http://localhost:3000/vendas`, venda)
  }
}
