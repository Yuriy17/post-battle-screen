import SpriteIcon from '../SpriteIcon/SpriteIcon';

const Player = ({ player }) => {
  const handleFriendRequest = () => {
    alert(`Friend request sent to ${player.nickname}`);
  };

  const getTankType = () => {
    return player.score > 1000 ? 'tank1' : 'tank2';
  };

  return (
    <li className={`player ${player.state}`}>
      <div className="icon">
        <SpriteIcon name={getTankType()} />
      </div>
      <div className="nickname">{player.nickname}</div>
      <div className="score">{player.score}</div>
      <div className="tooltip">
        <p>Total Kills: {player.totalKills}</p>
        <p>Total Deaths: {player.totalDeaths}</p>
        <button onClick={handleFriendRequest}>Send Friend Request</button>
      </div>
    </li>
  );
};

export default Player;
