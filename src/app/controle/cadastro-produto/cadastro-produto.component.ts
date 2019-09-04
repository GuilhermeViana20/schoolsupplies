import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProdutosService } from '../../produtos/produtos.service';
import { Produtos } from '../../produtos/produtos.model'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CadastroProdutoService } from './cadastro-produto.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'mt-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produtos: Produtos[] = [];
  produto: Produtos;
  bsmodal: BsModalRef;
  @ViewChild('deleteSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(
    private data: ProdutosService,
    private modalService: BsModalService,
    private cadastroProdutoService: CadastroProdutoService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.data.listaDeProdutos().subscribe(res => {
        this.produtos = res;
        console.log(this.produtos);
      })
  }

  onEdit(produto: Produtos, template: TemplateRef<any>){
    this.produto = produto;
    this.bsmodal = this.modalService.show(template);
  }

  atualizar(){
    console.log(this.produto)
    this.cadastroProdutoService
      .atualizar(this.produto)
      .subscribe(res => this.produtos.push(res));
      this.alert.show();
  }

  remover(produto: Produtos){
    this.produto = produto;
    this.cadastroProdutoService
      .remover(this.produto)
      .subscribe(res => this.produtos.push(res));
      this.listar();
      this.alert2.show();
  }

  fecharModal(){
    this.bsmodal.hide();
    this.listar();
  }
}
