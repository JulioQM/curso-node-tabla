// importamos el paquete que servira para guardar en un directorio dicha informacion
const fs = require('fs');

// uso de promesas
const generarTabla = (base, listar) => {
    return new Promise((resolve, reject) => {
        let datos = '';
        for (let i = 1; i <= 10; i++) {
            datos += ` ${base} x ${i} = ${base * i} \n`
        }
        if (listar === true) {
            console.log("=======================");
            console.log('tabla del ', base);
            console.log("=======================");
            console.log(datos);
            fs.writeFileSync(`tabla-${base}.txt`, datos);
        } else if (listar === false) {
            resolve(`¡El archivo tabla-${base}.txt se ha guardado correctamente!`);
        }
    });
}
// para exportar se agregar el metodo dentro de los parentesis
module.exports = { generarTabla };
