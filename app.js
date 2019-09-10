/* Importar as configurações do servidor */
const app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(80, () => {
    console.log('Servidor Online'); 
    });

require('socket.io').listen(server);