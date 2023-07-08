import { io, Socket } from 'socket.io-client';

const socket: Socket = io({
  transports: ['websocket'], // Specify WebSocket transport
});

export default socket;