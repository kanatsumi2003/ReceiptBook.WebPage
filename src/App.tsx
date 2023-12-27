import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './Pages/UserList';
import AppRoutes from './Routers/AppRoutes';

const App: React.FC = () => {
  return (
    <AppRoutes/>
  );
};

export default App;
