import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Auth from './component/pages/auth/Auth';
import Home from './component/pages/Homepage/Home';
import OperationData from './component/table/OperationData';
import LandingPage from './component/pages/landingpage/LandingPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/operationDatas' element={<OperationData />}/>
    </Routes>
     
    </div>
  );
}

export default App;
