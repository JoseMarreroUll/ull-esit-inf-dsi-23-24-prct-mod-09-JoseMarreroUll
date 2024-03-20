import { Objeto } from './objeto.js';

export abstract class Mochila {
  capacidad: number;
  numElementos: number;
  elementos:Objeto[] = [];
  
  public procesar(fichero :string): [number[], number[]] {
    this.initCapacidad(fichero);
    this.afterInitCapacidad(); // Hook

    this.initElementos(fichero);

    this.initNumElementos();
    this.afterInitNumElementos(); // Hook

    const beneficios =  this.elementos.map((elemento) => elemento.beneficio);
    const pesos = this.elementos.map((elemento) => elemento.peso);

    return [beneficios, pesos];
  }

  // Operaciones que deben ser implementadas por las subclases
  protected abstract initCapacidad(fichero: string): void;
  protected abstract initElementos(fichero: string): void;
  protected abstract initNumElementos(): void;

  // Hooks
  protected afterInitCapacidad() {}
  protected afterInitNumElementos() {}
}