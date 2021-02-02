import { Produto } from './Produto'
import { Carrinho } from 'carrinho'

export class Cesta extends Carrinho {

  get produtos(): Produto[] {
    return this._itens
  }

  doCalculoItem(item: Produto): number {
    return item.valor + 1
  }

  doCalculoExtras(): number {
    return 10
  }

}
