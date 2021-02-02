declare interface Item {
  readonly codigo: number;
  readonly descricao: string;
  readonly valor: number
}

declare abstract class Carrinho {
  protected _itens: Item[]
  adiciona(item: Item): void
  remove(item: Item): void
  get valorTotal(): number
  doCalculoItem(item: Item): number
  abstract doCalculoExtras(): number
}

export { Item, Carrinho }
