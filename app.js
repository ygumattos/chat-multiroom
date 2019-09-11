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

// Para enviar a mensagem para todos os ususários primeiro foi recuperado a msg da view
// Depois enviada para a controller emitir na tela
// Por ultimo criado a função broadcast para mandar para todos os usuarios conectados
//Broadcast envia para todos os usuario menos para quem enviou, por isso esta 'duplicado'
    socket.on('msgParaServidor', function(data) {
        socket.emit(
            'msgParaCliente', 
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
        socket.broadcast.emit(
            'msgParaCliente', 
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        );
    });
});