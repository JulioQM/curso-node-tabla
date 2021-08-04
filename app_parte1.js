const { generarTabla } = require('./helper/multiplicar_conPromesas');
//sirve para ponerle un alias
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    // esta funcion sirve para verificar que no reciba coomo entrada valores que no sean diferentes de numeros
    .check((argv, options) => {
        if (isNaN(argv.base)) {// trabaja con booleanos
            throw 'La base tiene que ser un numero';
        }
        return true;
        /* console.log('yargs',argv) */
    })
    .argv;

// para limpiar el espacio de trabajo en este caso la consola
console.clear();
console.log(argv);
const base = argv.base;
console.log('La base yargs: ', base);
const listar = argv.listar;
console.log('La lista yargs :', listar);

generarTabla(base, listar)
    .then((guardado) => {
        console.log('GUARDADO EXITOSO');
        console.log(guardado);
    })
    .catch(err => {
        console.log('MAL GUARDADO');
        console.log(err);
    });
