const { generarTabla } = require('./helper/multiplicarHastaN_conAsync');
const argv=require('./config/yargsN')
const color=require('colors');
// para limpiar el espacio de trabajo en este caso la consola
console.clear();
const base = argv.base;
const listar = argv.listar;
const hasta=argv.hasta;

generarTabla(base, listar,hasta)
    .then((tabla) => console.log('GUARDADO EXITOSO','\n',tabla.rainbow))
    .catch(err => console.log('MAL GUARDADO\n',err));
