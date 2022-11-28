const { crearArchivo } = require('./helpers/multiplicar_p_39');
const colors = require('colors');
const argv = require('./config/yargs-37')


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));