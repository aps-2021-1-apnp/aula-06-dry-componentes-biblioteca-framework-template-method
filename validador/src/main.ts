export function minLength(n: number, str: string): boolean {
  return str.trim().length >= n
}

export function isCPF(cpf: string): boolean {
  return cpf.match(/^\d{ 3}\.\d{ 3}\.\d{ 3} -\d{ 2}$/g) !== null
}
