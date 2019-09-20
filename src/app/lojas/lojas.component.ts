import { Component, OnInit } from '@angular/core';
import { Loja } from './loja/loja.model';
import { LojasService } from './lojas.service';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

  lojas: Loja[]

  constructor(private lojasService: LojasService) { }

  ngOnInit() {
    this.listarLojas();
  }
 
  listarLojas(){
    this.lojasService.obterLojas()
      .subscribe(lojas => this.lojas = lojas)
  }

}
