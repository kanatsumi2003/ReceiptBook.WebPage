import { HOST_API } from '../config';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'antd';
import axios from '../Routers/axiosInstance'
import UserForm from './UserForm';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import '../App.css'


interface User {
  id: number;
  name: string;
  contactNo: number;
  role: string;
  ccid: string;
}

const UserList: React.FC<{}> = () => {
  const [data, setData] = useState<User[]>([]);
  const fetchData = async () => {
    const rs = await axios.get('/api/user/get_all_users')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error.message);
      });

  };
 
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
    {
      title: 'CCID',
      dataIndex: 'ccid',
      key: 'ccid',
    },
  ];
 
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
<h2>Data Table</h2>
      <button className='bg-sky-500	 rounded-md  '>
      <Link to="/UserForm">Add +</Link>
      </button>
      <span className='flex flex-col items-center justify-center '>
      <Table className='w-4/5	' dataSource={data} columns={columns} rowKey="id" />
      </span>
    </div>
      
  )
};

export default UserList;
