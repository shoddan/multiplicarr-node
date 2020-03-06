//requireds

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comand no reconocido');
}
//const fs = require('fs');

//const fs = require('fs');
//const fs = require('fs');
//let base = 'ab';

//let argv2 = process.argv;


//console.log('Limite', argv.limnite);
//console.log(argv.base);
//let parametro = argv[2];

//let base = parametro.split('=')[1];

//console.log(base);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//    .catch(e => console.log(e));