import { Component, OnInit } from '@angular/core';
import { GerenciarVendasService } from './gerenciar-vendas.service';
import { GerenciarVendas } from './gerenciar-vendas.model';


@Component({
  selector: 'app-gerenciar-vendas',
  templateUrl: './gerenciar-vendas.component.html',
  styleUrls: ['./gerenciar-vendas.component.css']
})
export class GerenciarVendasComponent implements OnInit {

  vendas: GerenciarVendas[] = [];
  venda: GerenciarVendas;

  constructor(private data: GerenciarVendasService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeVendas().subscribe(res => {
      this.vendas = res;
      console.log(this.vendas);
    })
  }
}
