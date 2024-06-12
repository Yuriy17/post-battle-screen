import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Player from '../Player/Player';
import { setPlayers, setLoading, setError } from '../../store/playersSlice';
import socket from '../../socket';
import './PostBattleScreen.scss';

const PostBattleScreen = () => {
  const { winningTeam, losingTeam, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    socket.on('playersData', (players) => {
      dispatch(setPlayers(players));
    });

    socket.on('error', (errorMessage) => {
      dispatch(setError(errorMessage));
    });

    return () => {
      socket.off('playersData');
      socket.off('error');
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="post-battle-screen">
      <div className="team">
        <h2>Winning Team</h2>
        <ul>{winningTeam?.map((player) => <Player key={player.nickname} player={player} />)}</ul>
      </div>
      <div className="team">
        <h2>Losing Team</h2>
        <ul>{losingTeam?.map((player) => <Player key={player.nickname} player={player} />)}</ul>
      </div>
    </div>
  );
};

export default PostBattleScreen;
