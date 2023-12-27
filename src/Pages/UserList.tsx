import { HOST_API } from '../config';
import React, { useEffect, useState } from 'react';
import { Table, Button, List } from 'antd';
import axios from '../Routers/axiosInstance'
import UserForm from './UserForm';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  contactNo: number;
  role: string;
}

const UserList: React.FC<{}> = () => {
  const [data, setData] = useState<User[]>([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    axios.get('/api/user')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

  };

  const createUser = async (values: any) => {
    await axios.post('/api/user', values);
    fetchData();
    navigate('/userform');
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
      <UserForm onCreate={createUser}></UserForm>
      <Link to="/userform">
        <Button type="primary">Create User</Button>
      </Link>
      <Routes>
        <Route path="/userform" element={<UserForm onCreate={function (): void {
          throw new Error('Function not implemented.');
        }} />} />
      </Routes>
      <h2>Data Table</h2>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  )
};

export default UserList;
