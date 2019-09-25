import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loja } from 'src/app/lojas/loja/loja.model';
import { Observable } from 'rxjs';
import { DIMENSIVA_API } from 'src/app/app.api'

@Injectable({
  providedIn: 'root'
})
export class NovaLojaService {

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  cadastro(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>(`${DIMENSIVA_API}/lojas`, loja)
  }
}
