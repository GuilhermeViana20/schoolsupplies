import { Injectable } from '@angular/core';
import { Loja } from 'src/app/lojas/lojas.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovaLojaService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    
  }

  cadastro(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>(`http://localhost:3000/lojas`, loja)
  }
}
