import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Image, Input, Row, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import { PREFIX } from '../service/common';
import { logout } from '../service/login';
import { updateProfile } from '../service/user';
import { onResponse } from '../util/response';

function ProfileTable({info,showModal}) {

    const [form] = Form.useForm();
    const [avatarUrl, setAvatarUrl] = useState();
    const [loading, setLoading] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();

    const onLogoutSuccess = () => {
        window.location.href = '/login';
    }

    useEffect(() => {
        form.setFieldsValue({
            name: info?.name,
            email: info?.email,
            avatar: info?.avatar,
            phone: info?.phone,
            address: info?.address,
            balance: info?.balance / 100,
            level: info?.level,
            description: info?.description
        });

        setAvatarUrl(info?.avatar);
        console.log('setFormValue');
    }, [info]);

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

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
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setAvatarUrl(url);
                window.location.reload();
            });
        }
    };

    const logoutUser = async () => {
        logout().then(result => {
            onResponse(result, messageApi, onLogoutSuccess, null);
        });
    }

    const onSubmitProfile = async (values) => {
        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            address: values.address,
            description: values.description,
        };
        let res = await updateProfile(data);
        onResponse(res, messageApi, null, null);
    }

    // const uploadButton = (
    //     <button
    //       style={{
    //         border: 0,
    //         background: 'none',
    //       }}
    //       type="button"
    //     >
    //       {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //       <div
    //         style={{
    //           marginTop: 8,
    //         }}
    //       >
    //         Upload
    //       </div>
    //     </button>
    // );

    return (
        <Form 
            form={form}
            name="profile"
            onFinish={onSubmitProfile}
        >
            {contextHolder}
            <Row>
                <Col span={6}>
                    {avatarUrl && <Image
                        src={avatarUrl}
                        alt="avatar"
                        style={{ width: '70%' }}
                    />}
                    <Upload
                        name="avatar"
                        // listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${PREFIX}/user/avatar`}
                        beforeUpload={beforeUpload}
                        onChange={onAvatarChange}
                        withCredentials={true}
                        style={{ width: '100%' }}
                    >
                        <Button 
                            type='primary'
                            icon={<UploadOutlined />}
                            className='upload-button'
                        >
                            {avatarUrl ? "更新头像图片" : "上传头像图片"}
                        </Button>
                    </Upload>
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
                        <Input maxLength={20}/>
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
                        <Input maxLength={50}/>
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
                        <Input maxLength={20}/>
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="默认收货地址"
                    >
                        <Input maxLength={100}/>
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="个性自述"
                    >
                        <Input maxLength={100}/>
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