import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoItem } from './produto-item.model';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.css']
})
export class ProdutoItemComponent implements OnInit {

  @Input() produtoItem: ProdutoItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.produtoItem)
  }

}
