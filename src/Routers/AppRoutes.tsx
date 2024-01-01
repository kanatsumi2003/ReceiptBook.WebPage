import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from '../Pages/UserList';
import UserForm from '../Pages/UserForm';
import { App } from 'antd';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='userlist' element={<UserList />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
    )
  };

export default AppRoutes;
  