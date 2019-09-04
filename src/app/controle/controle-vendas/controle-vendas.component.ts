import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Venda } from './vendas.model';
import { VendasService } from './vendas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({ 
  selector: 'app-controle-vendas',
  templateUrl: './controle-vendas.component.html',
  styleUrls: ['./controle-vendas.component.css']
})
export class ControleVendasComponent implements OnInit {

  vendas: Venda[] = [];
  venda: Venda;
  bsmodal: BsModalRef;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: VendasService, private modalService: BsModalService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.data.listaDeVendas().subscribe(res => {
      this.vendas = res;
      console.log(this.vendas);
    })
  }

  onEdit(venda: Venda, template: TemplateRef<any>){
    this.venda = venda;
    this.bsmodal = this.modalService.show(template);
  }

  remover(venda: Venda){
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
