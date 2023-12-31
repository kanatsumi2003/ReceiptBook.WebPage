import React, {ReactNode} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserList from '../Pages/UserList';
import UserForm from '../Pages/UserForm';


const AppRoutes: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    )
  };

export default AppRoutes;
  