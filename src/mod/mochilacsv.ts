import fs from 'fs'

import { Mochila } from './mochila.js'

/**
 * Clase que representa la información de una mochila leída a través de un fichero CSV
 * 
 * @method initCapacidad Inicializa el atributo capacidad de la clase. Leyendo el archivo CSV, cuya ruta es pasada
 *                       por parámetro.
 * @method initElementos Inicializa el atributo elementos de la clase. Leyendo el archio CSV, cuya ruta es pasada
 *                       por parámetro.
 * @method initElementos Inicializa el atributo numElementos de la clase. Accediendo al length de elementos.
 */
export class MochilaCSV extends Mochila {
  protected initCapacidad(fichero: string): void {
    const data = fs.readFileSync(fichero, 'utf-8');
    const lineas = data.split('\n');
    this.capacidad = parseInt(lineas[0]);
  }

  protected initElementos(fichero: string): void {
    const data = fs.readFileSync(fichero, 'utf-8');
    const lineas = data.split('\n');
    for (let i = 2; i < lineas.length; i++) {
      const elemento = lineas[i].split(',');
      this.elementos.push({
        numElemento: parseInt(elemento[0]),
        peso: parseInt(elemento[1]),
        beneficio: parseInt(elemento[2])
      });
    }
  }

  protected initNumElementos(): void {
    this.numElementos = this.elementos.length;
  }

  protected afterInitNumElementos() {
    console.log('Inicializado el número de elementos: ', this.numElementos);
  }
}