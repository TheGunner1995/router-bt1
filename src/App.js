import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import User from './components/User';
import About from './components/About';
import Navbar from './components/Navbar';
import Notfould from './components/Notfould';
import UserDetalis from './components/UserDetalis';
import { useState } from 'react';

function App() {
  const [users,setUser]= useState([
    {id:'001', name:"thai nam1", email:'thainam1@gmail.com'},
    {id:'002', name:"thai nam2", email:'thainam2@gmail.com'},
    {id:'003', name:"thai nam3", email:'thainam3@gmail.com'},
    {id:'004', name:"thai nam4", email:'thainam4@gmail.com'},
    {id:'005', name:"thai nam5", email:'thainam5@gmail.com'},
    {id:'006', name:"thai nam6", email:'thainam6@gmail.com'},
    {id:'007', name:"thai nam7", email:'thainam7@gmail.com'},
    {id:'008', name:"thai nam8", email:'thainam8@gmail.com'}
  ])
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/About'element={<About/>}></Route>
          <Route path='/Contact'element={<Contact/>}></Route>
          <Route path='/User'element={<User users={users}/>}></Route>
          <Route path='/User/:userid'element={<UserDetalis users={users}/>}></Route>
          <Route path='*'element={<Notfould/>}></Route>
        </Routes>
      </div>
  
</div>

    
  );
}

export default App;
