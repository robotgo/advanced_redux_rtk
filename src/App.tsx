
import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {

  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">

      {isLoading && <h1>Loading....</h1>}
      {error && <h2>{error}</h2>}
      {JSON.stringify(users, null, 2)}
    </div>

  );
}

export default App;
