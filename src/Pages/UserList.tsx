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
      <div className='p-3 flex-col m-10'>
        <Button shape='round' href='/UserForm' className='mb-2 float-right text-white bold bg-green-700 hover:bg-green-100 ease-in-out hover: delay-150' icon={<PlusOutlined/>}>
        Add
        </Button>
        <div className=''>
          <Table rowClassName="hover-bg-blue-100" dataSource={data} columns={columns} rowKey="id" />
        </div>
      </div>
    </>

  )
};

export default UserList;
