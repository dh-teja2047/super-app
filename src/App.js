import React from 'react';
import RegistrationPage from "./pages/RegistrationPage";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Category from './pages/EntertainmentPage';
import View from './pages/View';
import Movies from "./components/List";


function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<RegistrationPage/> } />
      <Route path='/entertainment' element={<Category/>} />
      <Route path='/view' element={<View />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
        
    </div>
    
  );
}

export default App;
