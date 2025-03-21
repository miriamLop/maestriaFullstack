var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//codigo que estaba agregado
const clienteRoutes = require('./routes/cliente.routes');
const pedidoRoutes = require('./routes/pedido.routes');
//fin del codigo que estaba agregado

//app.use(express.json());
//adicionar al path /api
app.use('/api', clienteRoutes);
app.use('/api', pedidoRoutes);

//codigo que estaba agregado
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//fin del codigo que estaba agregado

app.use('/', indexRouter);
app.use('/users', usersRouter);
//se cambio el puerto al 3001

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));


module.exports = app;
