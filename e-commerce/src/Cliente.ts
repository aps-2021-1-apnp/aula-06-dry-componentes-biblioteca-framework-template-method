import * as valida from 'validador'

export class Cliente {
  nome: string
  cpf: string
  constructor(nome: string, cpf: string) {
    if (valida.minLength(3, nome)) {
      throw new Error('Nome deve ter pelo menos 3 caracteres')
    }
    if (valida.isCPF(cpf)) {
      throw new Error('CPF invalido')
    }
    this.nome = nome
    this.cpf = cpf
  }
}
