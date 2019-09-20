import { Injectable } from '@angular/core';
import { CarrinhoItem } from './carrinho-compra.model';
import { ProdutoItem } from '../produto-item/produto-item.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoCompraService {
  items: CarrinhoItem[] = []

  constructor(){}

//MÉTODO LIMPAR
  clear(){
    this.items= []
  }

//MÉTODO ADICIONAR ITEM
  addItem(item: ProdutoItem){
    let foundItem = this.items.find((mItem)=> mItem.produtoItem.id === item.id)
        if(foundItem){
          //aumentar a quantidade do mesmo
          this.increaseQty(foundItem)
        } else {
          //adiciona outro
          this.items.push(new CarrinhoItem(item))
        }
        // this.notificationService.notify(`Você adicionou o item ${item.name}`)
  }

//INCLUIR ITEM NO CARRINHO
  increaseQty(item: CarrinhoItem) {
    item.quantity = item.quantity + 1
  }

//TIRAR ITEM DO CARRINHO
  decreaseQty(item: CarrinhoItem) {
    item.quantity = item.quantity - 1
    if(item.quantity === 0){
      this.removeItem(item)
    }
  }

//MÉTODO REMOVER ITEM
  removeItem(item: CarrinhoItem){
    this.items.splice(this.items.indexOf(item), 1)
    // this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
  }

//MÉTODO TOTAL
  total(): number{
    return this.items
    .map(item => item.value())
    //SOMA VALOR ANTERIOR COM ATUAL
    .reduce((prev, value) => prev+value, 0)
  }
}
