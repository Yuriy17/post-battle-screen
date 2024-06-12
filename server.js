const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

let postBattleData = {
  winningTeam: {
    name: 'Winning Team',
    players: []
  },
  losingTeam: {
    name: 'Losing Team',
    players: []
  }
};

const updatePostBattleData = () => {
  // Logic to update post-battle data
  // For now, we'll just simulate some data
  postBattleData.winningTeam.players = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    nickname: `Winner${i + 1}`,
    score: Math.floor(Math.random() * 100),
    state: i % 2 === 0 ? 'alive' : 'dead',
    totalKills: Math.floor(Math.random() * 10),
    totalDeaths: Math.floor(Math.random() * 10)
  }));

  postBattleData.losingTeam.players = Array.from({ length: 50 }, (_, i) => ({
    id: i + 51,
    nickname: `Loser${i + 1}`,
    score: Math.floor(Math.random() * 100),
    state: i % 2 === 0 ? 'alive' : 'dead',
    totalKills: Math.floor(Math.random() * 10),
    totalDeaths: Math.floor(Math.random() * 10)
  }));
};

app.get('/api/post-battle-data', (req, res) => {
  res.json(postBattleData);
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendFriendRequest', (playerId) => {
    console.log(`Friend request sent to player ${playerId}`);
    // Implement friend request logic
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

setInterval(() => {
  updatePostBattleData();
  io.emit('postBattleDataUpdate', postBattleData);
}, 5000);

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
