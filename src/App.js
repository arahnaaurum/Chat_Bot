import './App.css';
import React from 'react';
import { Routers } from './pages/Routers';
import { AuthProvider } from './hooks/AuthProvider'

function App(props) {

  return <AuthProvider>
        <Routers/>
      </AuthProvider>
 }
 
export default App;
