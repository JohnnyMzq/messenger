import React,{useState} from 'react';
import './App.css';
import {Login, Chats} from './components'
import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom'


import  {AuthProvider}  from './contexts/AuthContext'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className="container" style={{fontFamily: 'Avenir'}}>
        <BrowserRouter>
          <AuthProvider> 
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/chats" element={<Chats darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/> 
          
        </Routes>
        </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
