import { Component, OnInit, Input, Output } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produtos } from './produtos.model' 
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from './carrinho/carrinho.model';

@Component({
  selector: 'mt-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [];
  @Input() carrinho: Carrinho[] = [];
  produto: Produtos;
  quantity = 2;

  constructor(
    private data: ProdutosService, 
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.obterProdutos();
  }

  obterProdutos(){
    this.data.listaDeProdutos().subscribe(res => {
      for(let index = 0; index < res.length; index++){
        if(res[index].fk_produtos == this.route.snapshot.params['id']){
          this.produtos.push(res[index]);
          // console.log(this.produtos)
        }
      }
    })
  }

  addProdutosNoCarrinho(produto: Produtos){
    this.produto = produto;
    this.carrinho.push(this.produto);
    this.quantity = this.quantity + 1;
    const total = this.produto.price;
      console.log(this.produtos)
      console.log(this.produto)
      console.log(this.carrinho);
      this.Total();
  }

  remover(produto: Produtos){
    const index = this.carrinho.indexOf(produto);
    this.carrinho.splice(index, 1)
      console.log(this.produtos)
      console.log(this.produto)
      console.log(this.carrinho);

  }

  Total(){
    // const total: number = this.produto.price;
    // return this.Total()
    // console.log('O total é: ' + total + ' e a quantidade é: ' + this.quantity + ' o valor do total é: ' + this.quantity * total)
  }



    
}