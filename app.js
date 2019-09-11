/* Importar as configurações do servidor */
const app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(80, function() {
    console.log('Servidor Online'); 
    });

/* Integrando o socket.io */
var io = require('socket.io').listen(server);

/* definindo variavel global */
app.set('io', io);

/* Criando a conexão por websocket */
io.on('connection',function(socket) {
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });
});