const { crearArchivo } = require('./helpers/multiplicar_p_35');
const colors = require('colors');
const argv = require('./config/yargs')


console.clear();

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));