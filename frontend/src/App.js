import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter, useHistory } from "react-router-dom";
import { UserContext } from "./Context";
import { JoblyApi } from "./api";
import { useEffect, useState } from 'react';

function App() {

  const [ user, setUser ] = useState(localStorage.getItem("user"));
  const [ token, setToken ] = useState(localStorage.getItem("token"));

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const login = async (loginInfo) => {
    let res = await JoblyApi.login(loginInfo);
    setToken(res.token);
    setUser(res.user);
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', res.user);
  };
  
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser, token, setToken, login}}>
        <BrowserRouter>
          <NavBar logout={logout}/>
          <Routes/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
