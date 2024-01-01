import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './Pages/UserList';
import AppRoutes from './Routers/AppRoutes';
import './App.css';
import { SideBar } from './Pages/SideBar';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar/>
    </BrowserRouter>
      
  );
};

export default App;