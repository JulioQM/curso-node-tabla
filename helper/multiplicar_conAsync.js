// importamos el paquete que servira para guardar en un directorio dicha informacion
const fs = require('fs');
const color=require('colors');
// para limpiar el espacio de trabajo en este caso la consola
console.clear();
// uso de async 
const generarTabla = async (base=5, listar=false) => {
    try {
        let datos = '';
        for (let i = 1; i <= 10; i++) {
            datos += ` ${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i} \n`
        }
        if (listar) {
            console.log("=======================".rainbow);
            console.log('tabla del ', color.green(base));
            console.log("=======================".rainbow);
            console.log(datos);
        }
        fs.writeFileSync(`tabla-${base}.txt`, datos);
        return (`¡El archivo tabla-${base}.txt se ha guardado correctamente!`);

    }
    catch (err) {
        throw err;
    }

}
// para exportar se agregar el metodo dentro de los parentesis
module.exports = { generarTabla };
