import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Update this URL as necessary

export default socket;
