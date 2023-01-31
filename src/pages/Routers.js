import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { Chats } from './Chats';
import { Nopage } from './Nopage';
import { Gists } from './Gists';
import Registration  from './Registration';
import Login from './Login';
import Logout from './Logout';
import React from 'react';
import RequireAuth from '../hocs/RequireAuth';


export function Routers() {

    return (
        <div className="App">
        <header className="App-header">
          Chat Bot
        </header>

        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/registration" className="link">Register</Link>
            <Link to="/login" className="link">Login</Link>
            <Link to="/logout" className="link">Logout</Link>
            <Link to="/profile" className="link">Profile</Link>
            <Link to="/chats" className="link">Chats</Link>
            <Link to="/gists" className="link">Gists</Link>
        </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route element = {<RequireAuth/>}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats/:chatId" element={<Chats />} />
              <Route path="/gists" element={<Gists />} />
              </Route>
            <Route path="*" element={<Nopage />} />
          </Routes>
        
         </div>
        );
    }