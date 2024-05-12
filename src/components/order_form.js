import { Button, Form, Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);
  useEffect(() => {
    form.validateFields({
        validateOnly: true,
      }) 
      .then(
        () => {
          setSubmittable(true);
        }, 
        () => {
          setSubmittable(false);
        }, 
      );
  }, [values,form]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      提交订单
    </Button>
  );
};


function OrderForm({onSubmit}) {
    const [form] = Form.useForm();
    const validateMessages = {
      required: '请输入${label}',
    };

    // const getTotalPrice = () => {
    //   let totalPrice = 0;
    //   selectedRowKeys.forEach((key) => {
    //     const item = books.find(item => item.id === key);
    //     if (item) {
    //       totalPrice += item.book.price * item.number;
    //     }
    //   });
    //   return totalPrice;
    // }

    return (
    <Form 
      form={form} 
      name="validateOnly" 
      layout="vertical" 
      autoComplete="off" 
      validateMessages={validateMessages}
      onFinish={onSubmit}
    >
      <Form.Item
        name="receiver"
        label="收货人"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="联系电话"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="收货地址"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">重置信息</Button>
        </Space>
      </Form.Item>
    </Form>
    );
}

export default OrderForm;