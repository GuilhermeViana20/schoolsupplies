import { Component, OnInit } from '@angular/core';
import { CarrinhoItem } from 'src/app/loja-detail/carrinho-compra/carrinho-compra.model'
import { CompraService } from './compra.service'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private compraService: CompraService) { }

  ngOnInit() {
  }

  carrinhoItems(): CarrinhoItem[] {
    return this.compraService.carrinhoItems()
  }

  increaseQty(item: CarrinhoItem){
    this.compraService.increaseQty(item)
  }

 decreaseQty(item: CarrinhoItem){
   this.compraService.decreaseQty(item)
 }

 remove(item: CarrinhoItem){
   this.compraService.remove(item)
 }
}
