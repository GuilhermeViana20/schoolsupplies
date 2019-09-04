import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtos } from 'src/app/produtos/produtos.model';
import { NovoProdutoService } from './novo-produto.service';
import { Loja } from './lojas.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'mt-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  produto: Produtos[] = [];
  lojas: Loja[];
  selectedFile: File = null;
  @ViewChild('deleteSwal') alert: SwalComponent;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private novoProdutoService: NovoProdutoService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.obterLojas();
    this.validation();
  }

  validation(){
    this.form = this.fb.group({
      fk_produtos: 
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      name:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      price:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      file:
      [null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      detail:
      [null, 
        [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      quantity:
      [null, 
        [Validators.required, Validators.minLength(1), Validators.maxLength(250)]]
      });

  }

  obterLojas(){
    this.novoProdutoService.obterFkProdutos().subscribe(res => {
    this.lojas = res;
  console.log(this.lojas)
  })
}

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    this.registrationForm.reset();
    this.removeUploadedFile();
  }

  cadastrar(){
    this.novoProdutoService.cadastro(this.form.value).subscribe(res => this.produto.push(res));
    console.log('Loja Cadastrada!')
    this.alert.show();
    this.onCancel();
    this.removeUploadedFile();
  }

  /*___________________________CARREGAR IMAGEM__________________________*/


  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })  

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.form.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.form.patchValue({
      file: [null]
    });
  }
  
  // Submit Registration Form
  onSubmit() {
    this.submitted = true;
      console.log(this.form.value)
  }

  /*_____________________________________________________________________*/
}
