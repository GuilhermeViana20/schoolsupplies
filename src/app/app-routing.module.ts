import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { LojasComponent } from './lojas/lojas.component'
import { FinalizarVendaComponent } from './finalizar-venda/finalizar-venda.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { VendaFinalizadaComponent } from './venda-finalizada/venda-finalizada.component';
import { ControleComponent } from './controle/controle.component';
import { CadastroProdutoComponent } from './controle/cadastro-produto/cadastro-produto.component';
import { CadastroLojaComponent } from './controle/cadastro-loja/cadastro-loja.component';
import { NovoProdutoComponent } from './controle/acoes/novo-produto/novo-produto.component';
import { NovaLojaComponent } from './controle/acoes/nova-loja/nova-loja.component';
import { ControleVendasComponent } from './controle/controle-vendas/controle-vendas.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
    {path: 'lojas', component: LojasComponent},
    {path: 'about', component: AboutComponent},

    {path: 'loja/:id/produtos', component: ProdutosComponent , pathMatch: 'full'},
    {path: 'loja/:id/produtos/finalizar-venda', component: FinalizarVendaComponent, pathMatch: 'full'},
    {path: 'loja/:id/produtos/finalizar-venda/venda-finalizada', component: VendaFinalizadaComponent, pathMatch: 'full'},

    {path: 'controle', component: ControleComponent},
    {path: 'cadastro-produto', component: CadastroProdutoComponent},
    {path: 'cadastro-loja', component: CadastroLojaComponent},
    {path: 'controle-vendas', component: ControleVendasComponent},
    {path: 'novoProduto', component: NovoProdutoComponent},
    {path: 'novaLoja', component: NovaLojaComponent}
]
