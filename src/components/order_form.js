import { Button, Form, Input, Space } from 'antd';
import React from 'react';

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form.validateFields({
        validateOnly: true,
      }) //所有字段都通过验证，Promise会被解决，否则会被拒绝
      .then(
        () => {
          setSubmittable(true);
        }, //所有字段都通过验证
        () => {
          setSubmittable(false);
        }, //有字段未通过验证
      );
  }, [values,form]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      提交订单
    </Button>
  );
};

function OrderForm() {
    const [form] = Form.useForm();
    const validateMessages = {
      required: '请输入${label}',
    };

    return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" validateMessages={validateMessages}>
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