import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FinalizarVendaService } from './finalizar-venda.service';
import { Venda } from './venda.model';
import { Carrinho } from '../produtos/carrinho/carrinho.model';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.css']
})
export class FinalizarVendaComponent implements OnInit {

  @Input() carrinho: Carrinho[] = [];
  form: FormGroup;
  submitted = false;
  venda: Venda[] = [];
  vendas: Venda;

  constructor(private fb: FormBuilder, private finalizarVendaService: FinalizarVendaService) { }

  ngOnInit() {
    this.validation();
    console.log(this.carrinho)
  }

  validation(){
    this.form = this.fb.group({
      firstName:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      lastName: 
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      email:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      address:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      zip:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      payment:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
      });

  }

  onSubmit() {
    this.submitted = true;
      console.log(this.form.value)
  }

  cadastrar(){
    this.finalizarVendaService.cadastro(this.form.value).subscribe(res => this.venda.push(res));
    console.log('Venda Finalizada!')
    // this.alert.show();
    // this.onCancel();
    // this.removeUploadedFile();
  }

}
