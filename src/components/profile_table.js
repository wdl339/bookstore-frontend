import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Image, Input, Row, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import { logout } from '../service/login';

function ProfileTable({info,showModal}) {

    const [form] = Form.useForm();
    const [avatarUrl, setAvatarUrl] = useState();

    useEffect(() => {
        form.setFieldsValue({
            name: info?.name,
            email: info?.email,
            avatar: info?.avatar,
            phone: info?.phone,
            address: info?.address,
            balance: info?.balance,
            level: info?.level,
            description: info?.description
        });

        setAvatarUrl(info?.avatar);
    }, [info, form, avatarUrl]);

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('你只能上传 JPG/PNG 文件!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片必须小于 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const onAvatarChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            setAvatarUrl(URL.createObjectURL(info.file.originFileObj));
            console.log(avatarUrl);
        }
    }

    const logoutUser = async () => {
        logout().then(result => {
            if (result) {
                window.location.href = '/login';
            } else {
                alert(result.message);
            }
        });
    }

    return (
        <Form 
            form={form}
            name="profile"
        >
            <Row>
                <Col span={6}>
                    <Form.Item
                        name="avatar"
                        label="头像"
                        rules={[
                            {
                                required: true,
                                message: '请上传头像',
                            },
                        ]}
                    />
                        <Image 
                            src={avatarUrl} 
                            alt="avatar"
                        />
                        <Upload
                            name="avatar"
                            beforeUpload={beforeUpload}
                            onChange={onAvatarChange}
                        >
                            <Button 
                                type='primary'
                                icon={<UploadOutlined />}
                                style={{marginTop: '20px', maxWidth: '100%'}}
                            >
                                更新头像图片
                            </Button>
                        </Upload>
                    <Form.Item/>
                </Col>
                <Col span={2}/>
                <Col span={16}>
                    <Form.Item
                        name="name"
                        label="姓名"
                        rules={[
                            {
                                required: true,
                                message: '请输入姓名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '输入的邮箱格式不正确!',
                            },
                            {
                                required: true,
                                message: '请输入邮箱',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="电话"
                        rules={[
                            {
                                required: true,
                                message: '请输入电话',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="默认收货地址"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="个性自述"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="level"
                        label="用户等级"
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        name="balance"
                        label="余额（元）"
                    >
                        <Input disabled/>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <div className='profile-button-group'>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
                        保存
                    </Button>

                    <Button
                        type="primary"
                        onClick={showModal}
                    >
                        修改密码
                    </Button>

                    <Button 
                        type="primary" 
                        danger
                        onClick={() => logoutUser()}
                    >
                        登出
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}

export default ProfileTable;