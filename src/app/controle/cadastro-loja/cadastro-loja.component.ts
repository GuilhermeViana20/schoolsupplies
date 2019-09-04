import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Loja } from '../../lojas/lojas.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CadastroLojaService } from './cadastro-loja.service';
import { LojasService } from 'src/app/lojas/lojas.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'mt-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.css']
})
export class CadastroLojaComponent implements OnInit {

  lojas: Loja[] = [];
  loja: Loja;
  bsmodal: BsModalRef;
  @ViewChild('upgradeSwal') alert: SwalComponent;
  @ViewChild('deleteSwal2') alert2: SwalComponent;

  constructor(
    private data: LojasService, 
    private modalService: BsModalService, 
    private cadastroLojaService: CadastroLojaService
    ) { }
 
  ngOnInit() {
    this.listar()
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
    this.cadastroLojaService
      .atualizar(this.loja)
      .subscribe(res => this.lojas.push(res));
      this.alert.show()
  }

  remover(loja: Loja){
    this.loja = loja;
    this.cadastroLojaService
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