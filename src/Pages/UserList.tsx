import { HOST_API } from '../config';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'antd';
import axios from '../Routers/axiosInstance'
import UserForm from './UserForm';
import { Link, Route, Routes } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  contactNo: number;
  role: string;
}

const UserList: React.FC<{}> = () => {
  const [data, setData] = useState<User[]>([]);

  const fetchData = async () => {
    axios.get('/api/user')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

  };
  const newUser = {

  }


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Contact No',
      dataIndex: 'contactNo',
      key: 'contactNo',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>  
      <Link to="/UserForm">Add +</Link>
      <h2>Data Table</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  )
};

export default UserList;
