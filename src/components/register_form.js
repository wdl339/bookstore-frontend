import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import '../css/login.css';

function RegisterForm() {
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        window.location.href = '/';
    };

    return (
        <Form 
            name="normal_login" 
            initialValues={{remember: true,}} 
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: '请输入用户名!',
                },
                ]}
            >
                <Input 
                    prefix={<UserOutlined />} 
                    placeholder="用户名" 
                    className='input'
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码!',
                },
                ]}
            >
                <Input
                    prefix={<LockOutlined />} 
                    type="password" 
                    placeholder="密码" 
                    className='input'
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: '请确认密码!',
                },

                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次密码输入不一致!'));
                    },
                }),
                ]}
            >
                <Input
                    prefix={<LockOutlined />} 
                    type="password" 
                    placeholder="再次确认密码" 
                    className='input'
                />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        message: '输入的邮箱格式不正确!',
                    },
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                ]}
            >
                <Input 
                    prefix={<MailOutlined />} 
                    placeholder="邮箱" 
                    className='input'
                />
            </Form.Item>

            <Form.Item>
                <Button 
                    type="primary" 
                    htmlType="submit"
                    className='login-button'
                >
                注册
                </Button>
            </Form.Item>

            <Form.Item>
                或 <a href="/login"> 返回登录</a>
            </Form.Item>
        </Form>
    );
}

export default RegisterForm;