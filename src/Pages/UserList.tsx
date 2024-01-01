import { HOST_API } from '../config';
import React, { useEffect, useState } from 'react';
import { Table, Button, List, Layout } from 'antd';
import axios from '../Routers/axiosInstance'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import {PlusOutlined } from '@ant-design/icons';

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
    <>
      <div className='p-3 flex-col'>
        <Button className='bg-sky-500 rounded-md float-right text-white bold bg-green-700 hover:from-current-to' icon={<PlusOutlined/>}>
          <Link to="/UserForm"></Link>
        </Button>
        <div className=''>
          <Table className='' dataSource={data} columns={columns} rowKey="id" />
        </div>
      </div>
    </>

  )
};

export default UserList;
