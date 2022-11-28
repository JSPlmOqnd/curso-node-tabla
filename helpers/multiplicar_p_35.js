const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false) => {
    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }
        if (listar) {

            console.log("====================".green);
            console.log('    Tabla del: '.blue, colors.blue(base));
            console.log("====================".green);

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}