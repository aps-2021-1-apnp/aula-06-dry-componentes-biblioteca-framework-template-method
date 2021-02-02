import { Item } from 'carrinho'

export class Produto implements Item {
  codigo: number
  descricao: string
  valor: number
  constructor(codigo: number, descricao: string, valor: number) {
    this.codigo = codigo
    this.descricao = descricao
    this.valor = valor
  }

}
