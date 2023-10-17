// pages/api/hello.js
import { Server } from 'socket.io';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;

    // Emitir las coordenadas a todos los clientes conectados
    io.emit('location', { latitude, longitude });

    res.status(200).json({ message: 'Location received successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io');
    const io = new Server(res.socket.server);
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
    res.socket.server.io = io;
  }
  return handler(req, res);
};
