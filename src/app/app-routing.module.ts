import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojasComponent } from './lojas/lojas.component';
import { LojaDetailComponent } from './loja-detail/loja-detail.component';
import { CompraComponent } from './compra/compra.component'
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component'
import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { GerenciarVendasComponent } from './painel-controle/gerenciar-vendas/gerenciar-vendas.component';
import { GerenciarLojasComponent } from './painel-controle/gerenciar-lojas/gerenciar-lojas.component';
import { GerenciarEstoqueComponent } from './painel-controle/gerenciar-estoque/gerenciar-estoque.component';
import { NovaLojaComponent } from './painel-controle/nova-loja/nova-loja.component';
import { NovoProdutoComponent } from './painel-controle/novo-produto/novo-produto.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lojas', component: LojasComponent},
  {path: 'lojas/:id', component: LojaDetailComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'compra-finalizada', component: CompraFinalizadaComponent},

  {path: 'painel-controle', component: PainelControleComponent},
  {path: 'gerenciar-vendas', component: GerenciarVendasComponent},
  {path: 'gerenciar-lojas', component: GerenciarLojasComponent},
  {path: 'gerenciar-estoque', component: GerenciarEstoqueComponent},
  {path: 'nova-loja', component: NovaLojaComponent},
  {path: 'novo-produto', component: NovoProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
