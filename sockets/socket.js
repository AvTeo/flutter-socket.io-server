
const {io} = require('../index');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');


    client.on('disconnect', () => {
        console.log('Clienete desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit( 'mensaje', {admin:'Nuevo mensaje'});

    });
});