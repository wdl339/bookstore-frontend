import { Button, Form, Input, InputNumber, message } from 'antd';
import React, { useState } from 'react';
import '../css/profile.css';
import { createBook } from '../service/book';
import { onResponse } from '../util/response';

function BookCreateTable() {

    const [form] = Form.useForm();
    const [coverUrl, setCoverUrl] = useState();
    // const [loading, setLoading] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();

    const onSubmitBook = async (values) => {
        if (!coverUrl) {
            messageApi.error('请添加封面');
            return;
        }

        const data = {
            title: values.title,
            cover: coverUrl,
            author: values.author,
            description: values.description,
            isbn: values.isbn,
            price: Math.round(values.price * 100),
            stock: values.stock,
        };

        let res = await createBook(data);
        onResponse(res, messageApi, null, null);
    }

    return (
        <Form 
            form={form}
            name="profile"
            onFinish={onSubmitBook}
        >
            {contextHolder}
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
                        name="cover"
                        label="封面"
                        rules={[
                            {
                                required: true,
                                message: '请添加封面',
                            },
                        ]}
                    >
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setCoverUrl(reader.result);
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
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

            <Form.Item>
                <div className='profile-button-group'>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
                        新建
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}

export default BookCreateTable;