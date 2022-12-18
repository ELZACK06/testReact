import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import UserList, { urluserList } from './component/UserList';
import UserAdd, { urluserAdd } from './component/UserAdd';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import UserEdit, { urluseredit } from './component/UserEdit';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
      
      <Routes> 
        <Route path={urluserList} element={<UserList/>}/>
        <Route path={urluserAdd} element={<UserAdd/>}/>
        <Route path={urluseredit+"/:id"} element={<UserEdit/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
