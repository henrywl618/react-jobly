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
  const [ application, setApplication ] = useState([]);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const login = async (loginInfo) => {
    let res = await JoblyApi.login(loginInfo);
    setToken(res.token);
    localStorage.setItem('token', res.token);
    let userInfo = await JoblyApi.getUser(loginInfo.username);
    setUser(userInfo);
    setApplication(userInfo.applications);
    localStorage.setItem('user', userInfo.username);
  };

  useEffect(()=>{
    const getUserData = async ()=>{
      const username = localStorage.getItem("user");
      let res = await JoblyApi.getUser(username);
      setUser(res);
      setApplication(res.applications);
    };
    getUserData();
  },[]);
  
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser, token, setToken, login, application, setApplication}}>
        <BrowserRouter>
          <NavBar logout={logout}/>
          <Routes/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
