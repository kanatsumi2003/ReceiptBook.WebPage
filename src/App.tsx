import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, Router} from 'react-router-dom';
import UserList from './Pages/UserList';
import AppRoutes from './Routers/AppRoutes';
import './App.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightSquareOutlined,
  LeftSquareOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useEffect, useState, ReactNode } from 'react';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed}

        style={{
          height: '100vh',
          width: '50vw',
        }}>
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: 'white',
            height: 64,
          }}
        />
           <Menu theme="dark" mode="inline">
           <Menu.Item key="UserList" icon={<UserOutlined />}>
             <Link to="UserList">user</Link>
           </Menu.Item>
         </Menu>

      </Sider>
      <Layout>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 100,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
