// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';



class App extends React.Component {
  componentDidMount() {
    console.log('mounted');
    const socket = io('http://localhost:3000');
    socket.on('chat message', function(msg){
      console.log('message  from server', msg);
    });
    socket.emit('chat message', 'Hello from client');
  }

  render() {
    return (
      <div className="container">Hello SocketIO</div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));