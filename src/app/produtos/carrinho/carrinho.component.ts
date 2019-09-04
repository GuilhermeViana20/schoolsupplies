import { Component, OnInit, Input } from '@angular/core';
import { Carrinho } from './carrinho.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Input() carrinho: Carrinho
  carrinhos: Carrinho[] = []

  constructor() { }

  ngOnInit() {
  }

}
