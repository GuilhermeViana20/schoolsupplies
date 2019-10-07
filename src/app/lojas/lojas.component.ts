import { Component, OnInit } from '@angular/core';
import { Loja } from './loja/loja.model';
import { LojasService } from './lojas.service';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {

  lojas: Loja[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private lojasService: LojasService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.listarLojas();

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
  }

  listarLojas(){
    this.lojasService.obterLojas()
      .subscribe(lojas => this.lojas = lojas)
  }



}
