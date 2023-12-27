import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserList from '../Pages/UserList';
import UserForm from '../Pages/UserForm';


const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/userform" element={<UserForm onCreate={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
        </Routes>
      </BrowserRouter>
    )
  };

export default AppRoutes;
  