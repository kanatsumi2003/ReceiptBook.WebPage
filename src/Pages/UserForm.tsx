import axios from "../Routers/axiosInstance";
import React, { useState } from "react";
import { Form, Input, Button, Flex, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        contactNo: '',
        role: '',
        ccid: ''
    })
    const handleSubmit = async (values: any) => {
        axios.post('/api/user', values)
            .then(response => setValues(response.data))
        navigate('/userlist');
    }
    return (
        <div className="flex justify-center mt-[10rem]">
        <Form layout="vertical" className="bg-white w-[30rem] rounded-3xl min-h-[30rem]"
        
            onFinish={handleSubmit}>
                <div className="m-[2rem] flex-col ">
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Contact number" name="contactNo" rules={[{ required: true, message: 'Please enter a contact number' }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please enter a role' }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="CCID" name="ccid" rules={[{ required: true, message: 'Please enter a CCID' }]}>
                        <Input />
                    </Form.Item>
            <Form.Item className="flex justify-center">
                <Button htmlType="submit" className=' mb-2 float-right text-white bold bg-green-700 hover:bg-green-100 ease-in-out hover: delay-150'>
                    Create
                </Button>
            </Form.Item>
            </div>
        </Form>
        </div>
    );
}

export default UserForm;