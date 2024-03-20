import 'mocha';
import { expect } from 'chai';

import { MochilaCSV } from '../src/mod/mochilacsv.js';
import { MochilaJSON } from '../src/mod/mochilajson.js';

describe('Tests de la Mochila', () => {
	const mochilaCSV = new MochilaCSV();
  const mochilaJSON = new MochilaJSON();

  it('La función procesar devuelve correctamente dos arrays uno con los beneficios de los elementos de la mochila y otro con los pesos de los elementos de la mochila. (JSON)', () => {
    const solucion = [[60, 100, 120, 80, 90], [10, 20, 30, 15, 25]];
    const aux = mochilaJSON.procesar('./data/mochila.json');
    expect(aux).to.deep.equal(solucion);
  });
  
  it('La función procesar devuelve correctamente dos arrays uno con los beneficios de los elementos de la mochila y otro con los pesos de los elementos de la mochila. (CSV)', () => {
    const solucion = [[60, 100, 120, 80, 90], [10, 20, 30, 15, 25]];
    const aux = mochilaCSV.procesar('./data/mochila.csv');
    expect(aux).to.deep.equal(solucion);
  });

	it('Se inicializa correctamente la capacidad de la mochila a través de un fichero JSON', () => {
    expect(mochilaJSON.capacidad).to.eql(50);
	});
    
  it('Se inicializa correctamente la capacidad de la mochila a través de un fichero CSV', () => {
    expect(mochilaCSV.capacidad).to.eql(50);
  });

  it('Se incilizan correctamente los elementos de la mochila a través de un fichero JSON', () => {
    expect(mochilaJSON.elementos).to.deep.equal([{ "numElemento": 1, "peso": 10, "beneficio": 60 }, { "numElemento": 2, "peso": 20, "beneficio": 100 },
                                                 { "numElemento": 3, "peso": 30, "beneficio": 120 }, { "numElemento": 4, "peso": 15, "beneficio": 80 },
                                                 { "numElemento": 5, "peso": 25, "beneficio": 90 }]);
  });

  it('Se incilizan correctamente los elementos de la mochila a través de un fichero JSON', () => {
    expect(mochilaCSV.elementos).to.deep.equal([{ "numElemento": 1, "peso": 10, "beneficio": 60 }, { "numElemento": 2, "peso": 20, "beneficio": 100 },
                                                { "numElemento": 3, "peso": 30, "beneficio": 120 }, { "numElemento": 4, "peso": 15, "beneficio": 80 },
                                                { "numElemento": 5, "peso": 25, "beneficio": 90 }]);
  });

  it('Se inicializa correctamente el número de elementos', () => {
    expect(mochilaJSON.numElementos).to.equal(5)
  });

  it('Se inicializa correctamente el número de elementos', () => {
    expect(mochilaJSON.numElementos).to.equal(5)
  });

});