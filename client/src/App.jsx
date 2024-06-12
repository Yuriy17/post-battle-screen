import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostBattleData, subscribeToUpdates } from './store/actions';
import Team from './components/Team/Team';
import './App.scss';
import socket from './socket';

const App = () => {
  const dispatch = useDispatch();
  const { postBattleData, loading, error } = useSelector((state) => state.postBattle);

  useEffect(() => {
    dispatch(fetchPostBattleData());
    subscribeToUpdates(dispatch);

    return () => {
      // Cleanup socket connection when the component is unmounted
      socket.disconnect();
    };
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!postBattleData) return <p>No data available</p>;

  return (
    <div className="app">
      <h1>Post-Battle Screen</h1>
      <div className="team-container">
        <Team players={postBattleData.winningTeam} title="Winning Team" />
        <Team players={postBattleData.losingTeam} title="Losing Team" />
      </div>
    </div>
  );
};

export default App;
