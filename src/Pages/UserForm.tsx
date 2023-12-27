import axios from "axios";
import React from "react";
import { Form, Input, Button } from "antd";

const UserForm: React.FC<{ onCreate: (value: any) => void }> = ({ onCreate }) => {
    const onFinish = (values: any) => {
        onCreate(values);
    };
    return (
        <Form onFinish={onFinish}>
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
                    Create User
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserForm;