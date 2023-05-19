//importar la funcion registrar del archivo operaciones
const { leer, registrar } = require('./operaciones');
//capturar el nombre de la operacion que se va a realizar
const operacion = process.argv[2];
//operacion para leer o registrar
if (operacion === 'leer') {
    leer();
} else if (operacion === 'registrar') {
    const nombre = process.argv[3];
    const edad = process.argv[4];
    const tipo = process.argv[5];
    const color = process.argv[6];
    const enfermedad = process.argv[7];

    registrar(nombre, edad, tipo, color, enfermedad);
} else {
    console.log('No se reconoce la operación');
}


