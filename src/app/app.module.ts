import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ROUTES } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { LojasComponent } from './lojas/lojas.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FinalizarVendaComponent } from './finalizar-venda/finalizar-venda.component';
import { VendaFinalizadaComponent } from './venda-finalizada/venda-finalizada.component';
import { ControleComponent } from './controle/controle.component';
import { PaginacaoComponent } from './controle/paginacao/paginacao.component';
import { CadastroProdutoComponent } from './controle/cadastro-produto/cadastro-produto.component';
import { CadastroLojaComponent } from './controle/cadastro-loja/cadastro-loja.component';
import { NovoProdutoComponent } from './controle/acoes/novo-produto/novo-produto.component';
import { NovaLojaComponent } from './controle/acoes/nova-loja/nova-loja.component';
import { ModalModule } from 'ngx-bootstrap';
import { ControleVendasComponent } from './controle/controle-vendas/controle-vendas.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LojasComponent,
    FooterComponent,
    ProdutosComponent,
    FinalizarVendaComponent,
    VendaFinalizadaComponent,
    ControleComponent,
    PaginacaoComponent,
    CadastroProdutoComponent,
    CadastroLojaComponent,
    NovoProdutoComponent,
    NovaLojaComponent,
    ControleVendasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
