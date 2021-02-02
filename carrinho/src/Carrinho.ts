import { Item } from './Item'

export abstract class Carrinho {
  protected _itens: Item[] = []

  adiciona(item: Item): void {
    this._itens.push(item)
  }

  remove(item: Item): void {
    const i = this._itens.indexOf(item)
    if (i >= 0) {
      this._itens.splice(i, 1)
    }
  }

  // template method! define a ordem dos passos
  get valorTotal(): number {
    let total = 0
    for (const item of this._itens) {
      total += this.doCalculoItem(item)
    }
    total += this.doCalculoExtras() // delega um passo
    return total
  }

  // hook: pode ser sobrescrito
  doCalculoItem(item: Item): number {
    return item.valor
  }

  // passo/parte do algoritmo: deve ser escrito
  abstract doCalculoExtras(): number
}
