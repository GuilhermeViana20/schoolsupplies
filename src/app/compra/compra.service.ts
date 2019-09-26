import { Injectable } from '@angular/core';
import { CarrinhoCompraService } from '../loja-detail/carrinho-compra/carrinho-compra.service'
import { CarrinhoItem } from '../loja-detail/carrinho-compra/carrinho-compra.model'

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private carrinhoService: CarrinhoCompraService) { }

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

}
