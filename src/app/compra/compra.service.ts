import { Injectable } from '@angular/core';
import { CarrinhoCompraService } from '../loja-detail/carrinho-compra/carrinho-compra.service'
import { CarrinhoItem } from '../loja-detail/carrinho-compra/carrinho-compra.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from './compra.model';
import { DIMENSIVA_API } from '../app.api';


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private carrinhoService: CarrinhoCompraService,
              private http: HttpClient) { }


  itemsValue(): number {
    return this.carrinhoService.total()
  }

  carrinhoItems(): CarrinhoItem[]{
    return this.carrinhoService.items
  }

  increaseQty(item: CarrinhoItem){
    this.carrinhoService.increaseQty(item)
  }

 decreaseQty(item: CarrinhoItem){
   this.carrinhoService.decreaseQty(item)
 }

 remove(item: CarrinhoItem){
   this.carrinhoService.removeItem(item)
 }

 clear(){
  this.carrinhoService.clear()
  }

  checarCompra(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>(`${DIMENSIVA_API}/compras`, compra)
  }
}
