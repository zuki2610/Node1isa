const fileSystem = require('fs');

const leer = () => {
    console.log("inicio de leer...");
    const allDates = fileSystem.readFileSync('./citas.json', 'utf-8');
    const allDatesJSON = JSON.parse(allDates);
    console.log("fin de leer...")
    console.log(allDatesJSON);
};


const registrar = (nombre, edad, tipo, color, enfermedad) => {
    console.log("inicio de registrar...");
    const paciente = { nombre, edad, tipo, color, enfermedad };
    console.log("Paciente", paciente);
    const citas = fileSystem.readFileSync('./citas.json', 'utf-8');
    const arregloCitas = JSON.parse(citas);
    arregloCitas.push(paciente);
    console.log("Resultado", arregloCitas);
    fileSystem.writeFileSync('./citas.json', JSON.stringify(arregloCitas));
    console.log("fin de registrar...");

};

module.exports = {
    leer,
    registrar
}


