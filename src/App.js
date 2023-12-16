import React from 'react';
import RegistrationPage from "./pages/RegistrationPage";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Category from './pages/EntertainmentPage';

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<RegistrationPage/> } />
      <Route path='entertainment' element={<Category/>} />
    </Routes>
        
    </div>
    
  );
}

export default App;
