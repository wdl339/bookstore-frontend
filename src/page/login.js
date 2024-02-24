import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import '../css/login.css';


function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
            <div className="background">
                <div className="login-card">
                    <h1>电子书城</h1>  
                    <Form name="normal_login" initialValues={{remember: true,}} onFinish={onFinish}>
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="用户名" className='input'/>
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
                            <Input prefix={<LockOutlined />} type="password" placeholder="密码" className='input'/>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className='remember-me'>记住我</Checkbox>
                            </Form.Item>

                            <a href="/forget-password" className='forget-password'>忘记密码</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            登录
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            或 <a href="/register"> 现在注册!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    );
}


export default Login;


