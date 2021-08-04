const { generarTabla } = require('./helper/multiplicar_conAsync');
const argv=require('./config/yargs')
const color=require('colors');
// para limpiar el espacio de trabajo en este caso la consola
console.clear();
const base = argv.base;
const listar = argv.listar;

generarTabla(base, listar)
    .then((tabla) => console.log('GUARDADO EXITOSO','\n',tabla.rainbow))
    .catch(err => console.log('MAL GUARDADO\n',err));
