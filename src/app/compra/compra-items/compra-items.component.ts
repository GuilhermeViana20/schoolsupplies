import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from 'src/app/loja-detail/carrinho-compra/carrinho-compra.model'

@Component({
  selector: 'app-compra-items',
  templateUrl: './compra-items.component.html',
  styleUrls: ['./compra-items.component.css']
})
export class CompraItemsComponent implements OnInit {

  @Input() items: CarrinhoItem[]

  @Output() increaseQty = new EventEmitter<CarrinhoItem>()
  @Output() decreasyQty = new EventEmitter<CarrinhoItem>()
  @Output() remove = new EventEmitter<CarrinhoItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item:CarrinhoItem){
    this.increaseQty.emit(item)
  }

 emitDecreaseQty(item: CarrinhoItem){
   this.decreasyQty.emit(item)
 }

 emitRemove(item: CarrinhoItem){
   this.remove.emit(item)
 }
 
}
