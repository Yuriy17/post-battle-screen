import React from 'react';
import Player from '../Player/Player';

const Team = ({ title, players }) => (
  <div className="team">
    <h2>{title}</h2>
    <ul>
      {players.map((player) => (
        <Player key={player.nickname} player={player} />
      ))}
    </ul>
  </div>
);

export default Team;
