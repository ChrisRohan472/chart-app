import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Insta from './insta';
import { store } from './reducers';
import React, { useState } from "react";


function App() {
  const [status,setStatus] =useState(false);
  store.subscribe(() => {
    console.log('current state', store.getState());
    setStatus(store.getState().auth.status);
   });
  function auth()
  {
    if(status===true)
    
      return <Dashboard/>
      else 
      return <Login/>
    
  }
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/insta" element={<Insta/>}>
        </Route>
        <Route path="/dashboard" element={auth()}>
         
        </Route>
        <Route path="/" element={<><h1>Helllo</h1></>}>
         
         </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
