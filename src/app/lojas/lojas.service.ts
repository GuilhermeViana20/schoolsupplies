import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loja } from './lojas.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LojasService {

  constructor(private http: HttpClient) { }

    listaDeLojas(): Observable<Loja[]>{
        return this.http.get<Loja[]>(`http://localhost:3000/lojas`);
    }

}
