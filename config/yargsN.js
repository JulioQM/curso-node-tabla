const { number } = require('yargs');

// funcion separada, a parte 
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description:'Muestra la base del multiplicador'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        description:'Muesta la lista de la tabla'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        demandOption:true,
        description:'Mustra el rango de la multiplicacion'
    })
    // esta funcion sirve para verificar que no reciba coomo entrada valores que no sean diferentes de numeros
    .check((argv, options) => {
        if (isNaN(argv.base)) {// trabaja con booleanos
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;