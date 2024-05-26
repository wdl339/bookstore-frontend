import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import '../css/login.css';
import { login } from '../service/login';
import { onResponse } from '../util/response';

function LoginForm() {
    const [messageApi, contextHolder] = message.useMessage();

    const onLoginSuccess = () => {
        window.location.href = '/';
    }

    const onFinish = (values) => {
        const {username, password} = values;
        login(username, password).then(result => {
            onResponse(result, messageApi, onLoginSuccess, null);
        });
    }

    return (
        <Form 
            name="normal_login" 
            initialValues={{remember: true,}} 
            onFinish={onFinish}
        >
            {contextHolder}
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
                    maxLength={255}
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
                <Input.Password
                    prefix={<LockOutlined />} 
                    type="password" 
                    placeholder="密码" 
                    className='input'
                    maxLength={255}
                />
            </Form.Item>

            {/* <Form.Item>
                <Form.Item 
                    name="remember" 
                    valuePropName="checked" 
                    noStyle
                >
                    <Checkbox className='remember-me'>记住我</Checkbox>
                </Form.Item>

                <a href="/register" className='forget-password'>忘记密码</a>
            </Form.Item> */}

            <Form.Item>
                <Button 
                    type="primary" 
                    htmlType="submit"
                    className='login-button'
                >
                登录
                </Button>
            </Form.Item>

            <Form.Item>
                或 <a href="/register"> 现在注册!</a>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;