import fs from 'fs';

import { Mochila } from './mochila.js';

export class MochilaJSON extends Mochila {
  protected initCapacidad(fichero: string): void {
    const data = fs.readFileSync(fichero, 'utf-8');
    const json = JSON.parse(data);
    this.capacidad = json.capacidad;
  }

  protected initElementos(fichero: string): void {
    const data = fs.readFileSync(fichero, 'utf-8');
    const json = JSON.parse(data);
    this.elementos = json.elementos;
  }

  protected initNumElementos(): void {
    this.numElementos = this.elementos.length;
  }

  protected afterInitCapacidad() {
    console.log('Capacidad de la mochila:', this.capacidad);
  }
}