const express = require('express');
const app = express();
const PORT = 8080;
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
// Importamos datos de conexiones
const { options: optMDB } = require('./options/mariaDB.js');
const { options: optLite } = require('./options/sqlite3.js');

const { Contenedor } = require('./classes/ClassesDB.js');
const producto = new Contenedor(optMDB, 'productos');
const chat = new Contenedor(optLite, 'mensajes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.use(express.static(__dirname + "/public"));

io.on('connection', async (socket) => {
    console.log('Un cliente se ha conectado');
    const productos = await producto.getAll();
    socket.emit('productos', productos);

    const messages = await chat.getAll();
    socket.emit('messages', messages);

    socket.on('new-producto', async (data) => {
        const idNuevoProducto = await producto.save(data);
        const productos = await producto.getAll();
        io.sockets.emit('productos', productos);
    });
    socket.on('new-message', async (data) => {
        const nuevoM = await chat.save(data);
        const messages = await chat.getAll();
        io.sockets.emit('messages', messages);
    });

});


// Conexión al puerto
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en el servidor: ${error}`));
