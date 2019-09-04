import { Component, OnInit } from '@angular/core';
import { LojasService } from './lojas.service';
import { Loja } from './lojas.model';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
})
export class LojasComponent implements OnInit {

  lojas: Loja[]

  constructor(private data: LojasService) { }

  ngOnInit() {
    this.obterLojas();
  }

  obterLojas(){
      this.data.listaDeLojas().subscribe(res => {
      this.lojas = res;
      console.log(this.lojas)
    })
  }
}