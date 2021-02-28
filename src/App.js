import React, { useState } from 'react';
import store from './store'
import MainField from './compontents/MainField'


function App() {
  const [username, setUsername] = useState('');
  const [logedin, setLogedin] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    if(!username){
      alert("Please add name")
      return
    }
    store.dispatch({
      type: "login",
      payload: {
          username: username
      }
    });
    if(!logedin){
      setLogedin(true);
      console.log("Bejelentkezes")
    }
    console.log(username)
    console.log(store.getState())
  }

  const handleLogout = event => {
    event.preventDefault();

    if(logedin){
      setLogedin(false);
      console.log("Kijelentkezes")
    }
  }


  if(!logedin){
    return(
      <div>
        <h1>Please log in</h1>
        <form onSubmit={handleLogin}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }else{
    return(
      <div>
          <form onSubmit={handleLogout}>
            <button type="submit">LogOut</button>
          </form>
          <MainField />
      </div>
    )
  }



}

export default App;