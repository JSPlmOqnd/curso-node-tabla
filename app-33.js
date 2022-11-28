const { crearArchivo } = require('./helpers/multiplicar_p_2');

const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);


console.log('base: yargs', argv.base)

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));