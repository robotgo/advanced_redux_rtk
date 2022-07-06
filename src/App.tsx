
import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {

  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">

      {/* {isLoading && <h1>Loading....</h1>}
      {error && <h2>{error}</h2>}
      {JSON.stringify(users, null, 2)} */}

      <PostContainer />
      {/* RTK Query использует данные, полученные для PostContainer, и в компоненте PostContainer2.
          Запрос на сервер идет только один.
      */}
      <PostContainer2 />
    </div>

  );
}

export default App;
