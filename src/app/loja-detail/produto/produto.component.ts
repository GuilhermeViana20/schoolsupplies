import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LojasService } from 'src/app/lojas/lojas.service';
import { ProdutoItem } from '../produto-item/produto-item.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Observable<ProdutoItem[]>

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.listarProdutosDeLoja();
  }

  listarProdutosDeLoja(){
    this.produto = this.lojasService
    .obterProdutoDeLoja(this.route.snapshot.params['id'])
  }

  addProdutoItem(item: ProdutoItem){
    console.log(item)
  }

}
