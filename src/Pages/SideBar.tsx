import React, { ReactNode } from "react";
import { Layout, Menu } from "antd";
import axios from "axios";
import Sider from "antd/es/layout/Sider";
import AppRoutes from "../Routers/AppRoutes";
import { Link, Outlet } from "react-router-dom";
import { UserOutlined, HomeOutlined } from "@ant-design/icons"
import UserList from "./UserList";
import { Content } from "antd/es/layout/layout";
import UserForm from "./UserForm";

export const SideBar: React.FC = () => {
    return (
        <>
            <Layout>
                <MenuNavBar />
                <Layout>
                    <Content>
                        <AppRoutes />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

const MenuNavBar: React.FC = () => {
    return (
        <Sider theme="dark">
            <Menu theme="dark" className="p-3">
                <Menu.Item key='1' style={{marginBottom: '10%'}} icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key='1' style={{marginBottom: '10%'}} icon={<UserOutlined />}>
                    <Link to="/UserList">User</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};