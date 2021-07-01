import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Header'
import './Header.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser, logout, login  } from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          //user logged in
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          }));
        }else{
          //user not logged in 
        }
      })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )} 
    </div>
  );
}

export default App;
