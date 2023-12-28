import axios from "../Routers/axiosInstance";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        contactNo: '',
        role: '',
    })
    const handleSubmit = async (values: any) => {
        axios.post('/api/user', values)
        .then(response => setValues(response.data))
        navigate('/userlist');
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Contact Number" name="contactNo" rules={[{ required: true, message: 'Please enter a contact number' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please enter a role' }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create 
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserForm;