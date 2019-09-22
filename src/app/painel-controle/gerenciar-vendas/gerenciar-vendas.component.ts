import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GerenciarVendasService } from './gerenciar-vendas.service';
import { GerenciarVendas } from './gerenciar-vendas.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-gerenciar-vendas',
  templateUrl: './gerenciar-vendas.component.html',
  styleUrls: ['./gerenciar-vendas.component.css']
})
export class GerenciarVendasComponent implements OnInit {

  vendas: GerenciarVendas[] = [];
  venda: GerenciarVendas;
  bsmodal: BsModalRef;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: GerenciarVendasService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeVendas().subscribe(res => {
      this.vendas = res;
      console.log(this.vendas);
    })
  }

  onEdit(venda: GerenciarVendas, template: TemplateRef<any>){
    this.venda = venda;
    this.bsmodal = this.modalService.show(template);
  }

  remover(venda: GerenciarVendas){
    this.venda = venda;
    this.data
      .remover(this.venda)
      .subscribe(res => this.vendas.push(res));
      console.log('venda excluida com sucesso')
      this.listar()
      this.alert2.show()
  }

  fecharModal(){
    this.bsmodal.hide();
    this.listar()
  }

}
