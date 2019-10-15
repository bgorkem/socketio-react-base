var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

// webpack middleware setup
const webpackOptions = require('./webpack.config');
const compiler = webpack(webpackOptions);
app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
    writeToDisk: true,
  })
);

io.on('connection', function(socket){
  console.log('a user connected');

  // send a message to channel
  io.emit('chat message', 'hi from server');

  // disconnected
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  // when server receives a message
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});



