import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Loja } from 'src/app/lojas/loja/loja.model';
import { GerenciarLojasService } from './gerenciar-lojas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-gerenciar-lojas',
  templateUrl: './gerenciar-lojas.component.html',
  styleUrls: ['./gerenciar-lojas.component.css']
})
export class GerenciarLojasComponent implements OnInit {

  lojas: Loja[] =[];
  loja: Loja;
  bsmodal: BsModalRef;
  @ViewChild('upgradeSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(private data: GerenciarLojasService,
              private modalService: BsModalService,
              private gerenciarLojaService: GerenciarLojasService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.data.listaDeLojas().subscribe(res => {
      this.lojas = res;
      console.log(this.lojas);
    })
  }

  onEdit(loja: Loja, template: TemplateRef<any>){
    this.loja = loja;
    this.bsmodal = this.modalService.show(template);
  }

  atualizar(){
    console.log(this.loja)
    this.gerenciarLojaService
      .atualizar(this.loja)
      .subscribe(res => this.lojas.push(res));
      this.alert.show()
  }

  remover(loja: Loja){
    this.loja = loja;
    this.gerenciarLojaService
      .remover(this.loja)
      .subscribe(res => this.lojas.push(res));
      this.listar()
      this.alert2.show()
  }


  fecharModal(){
    this.bsmodal.hide();
    this.listar()
  }

}
