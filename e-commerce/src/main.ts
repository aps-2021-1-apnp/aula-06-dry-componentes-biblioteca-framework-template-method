import { Cesta } from './Cesta'
import { Produto } from './Produto'

const p1 = new Produto(1, 'Tripé Para Celular Flexivel', 100)
const p2 = new Produto(2, 'Carregador de parede universal 2.1A, 2 portas USB, bivolt', 100)
const p3 = new Produto(3, 'Caixa Multimidia Portatil Go 2, JBL', 100)
const p4 = new Produto(4, 'Bateria Externa Carga Rápida 10,000Mah USB Tipo C', 100)
const p5 = new Produto(5, 'Fones de Ouvido Xiaomi Redmi AirDots', 100)
const p6 = new Produto(6, 'Máquina De Café Espresso Coffee Cream', 100)
const p7 = new Produto(7, 'Parafusadeira/furadeira De Impacto 1⁄2” (13mm) 20v Max', 100)
const p8 = new Produto(8, 'Honorall Full HD 1080 P Webcam USB Mini Câmera', 100)

const cesta = new Cesta()
cesta.adiciona(p1)
cesta.adiciona(p2)
console.log(cesta.valorTotal)
console.log(cesta.produtos)
cesta.adiciona(p3)
cesta.adiciona(p4)
console.log(cesta.valorTotal)
