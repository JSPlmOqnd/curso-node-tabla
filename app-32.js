const { crearArchivo } = require('./helpers/multiplicar_p_2');
console.clear();

console.log(process.argv);

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);

// const base = 3;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));