import '../css/style.css'

class Cliente {
  constructor(nombre) {
    this.nombre = nombre
  }
  mostrarNombre() {
    return `Nombre cliente: ${this.nombre}`
  }
}

const julian = new Cliente('Julian')

console.log(julian.mostrarNombre())
