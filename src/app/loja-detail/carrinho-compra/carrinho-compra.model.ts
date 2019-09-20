import { ProdutoItem } from '../produto-item/produto-item.model'

export class CarrinhoItem {
    constructor(public produtoItem: ProdutoItem,
                public quantity: number = 1){}

    value(): number {
      return this.produtoItem.price * this.quantity
    }
}
