import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Image, Input, InputNumber, Row, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import '../css/profile.css';
import { hideBook, updateBook } from '../service/book';
import { PREFIX } from '../service/common';
import { onResponse } from '../util/response';

function BookEditTable({info, bookId}) {

    const [form] = Form.useForm();
    const [coverUrl, setCoverUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(true);

    const [messageApi, contextHolder] = message.useMessage();

    const onHideBookSuccess = () => {
        window.location.reload();
    }

    useEffect(() => {
        form.setFieldsValue({
            title: info?.title,
            cover: info?.cover,
            author: info?.author,
            description: info?.description,
            isbn: info?.isbn,
            price: info?.price / 100,
            stock: info?.stock,
            sales: info?.sales,
        });

        setActive(info?.active);
        setCoverUrl(info?.cover);
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

    const onCoverChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setCoverUrl(url);
            });
        }
    };

    const hideTheBook = async () => {
        hideBook(bookId).then(result => {
            onResponse(result, messageApi, onHideBookSuccess, null);
        });
    }

    const onSubmitBook = async (values) => {
        const data = {
            title: values.title,
            author: values.author,
            description: values.description,
            isbn: values.isbn,
            price: Math.round(values.price * 100),
            stock: values.stock,
        };

        console.log(data);
        let res = await updateBook(bookId,data);
        onResponse(res, messageApi, null, null);
    }

    return (
        <Form 
            form={form}
            name="profile"
            onFinish={onSubmitBook}
        >
            {contextHolder}
            <Row>
                <Col span={6}>
                    {coverUrl && <Image
                        src={coverUrl}
                        alt="cover"
                        style={{ width: '70%' }}
                    />}
                    <Upload
                        name="cover"
                        // listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${PREFIX}/books/${bookId}/cover`}
                        beforeUpload={beforeUpload}
                        onChange={onCoverChange}
                        withCredentials={true}
                        style={{ width: '100%' }}
                    >
                        <Button 
                            type='primary'
                            icon={<UploadOutlined />}
                            className='upload-button'
                        >
                            {coverUrl ? "更新图书封面" : "上传图书封面"}
                        </Button>
                    </Upload>
                </Col>
                <Col span={2}/>
                <Col span={16}>
                    <Form.Item
                        name="title"
                        label="书名"
                        rules={[
                            {
                                required: true,
                                message: '请输入书名',
                            },
                        ]}
                    >
                        <Input maxLength={50}/>
                    </Form.Item>

                    <Form.Item
                        name="author"
                        label="作者"
                        rules={[
                            {
                                required: true,
                                message: '请输入作者',
                            },
                        ]}
                    >
                        <Input maxLength={50}/>
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="书籍描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入书籍描述',
                            },
                        ]}
                    >
                        <Input.TextArea maxLength={990} rows={4}/>
                    </Form.Item>

                    <Form.Item
                        name="isbn"
                        label="ISBN"
                        rules={[
                            {
                                required: true,
                                message: '请输入ISBN',
                            },
                        ]}
                    >
                        <Input maxLength={30}/>
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="价格"
                        rules={[
                            {
                                required: true,
                                message: '请输入价格',
                            },
                        ]}
                    >
                        <InputNumber min={0} step={0.01} stringMode/>
                    </Form.Item>

                    <Form.Item
                        name="stock"
                        label="库存"
                        rules={[
                            {
                                required: true,
                                message: '请输入库存',
                            },
                        ]}
                    >
                        <InputNumber min={0} step={1}/>
                    </Form.Item>

                    <Form.Item
                        name="sales"
                        label="销量"
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
                        danger={active}
                        onClick={() => hideTheBook()}
                    >
                        {active ? '删除（下架）' : '上架'}
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}

export default BookEditTable;