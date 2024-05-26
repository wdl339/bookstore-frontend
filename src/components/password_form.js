import { Button, Form, Input, Space, message } from 'antd';
import React from 'react';
import { changePassword } from '../service/user';
import { onResponse } from '../util/response';

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
      确认修改
    </Button>
  );
};

function PasswordForm() {
    const [form] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();

    const onSubmit = async (values) => {
        const { old_password, new_password } = values;
        const res = await changePassword(old_password, new_password);
        onResponse(res, messageApi, null, null);
    }

    return (
    <Form 
      form={form} 
      name="validateOnly" 
      layout="vertical" 
      autoComplete="off"
      onFinish={onSubmit} 
    >
      {contextHolder}
      <Form.Item
        name="old_password"
        label="请输入原密码"
        rules={[
          {
            required: true,
            message: '请输入原密码',
          },
          {
            message: '原密码错误',
          }
        ]}
      >
        <Input maxLength={255} type='password'/>
      </Form.Item>

      <Form.Item
        name="new_password"
        label="请输入新密码"
        rules={[
          {
            required: true,
            message: '请输入新密码',
          },
        ]}
      >
        <Input type='password' maxLength={255}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['new_password']}
        label="再次确认新密码"
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认新密码!',
          },

          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('new_password') === value) {
                return Promise.resolve();
              }
                return Promise.reject(new Error('两次密码输入不一致!'));
              },
          }),
        ]}
      >
        <Input type='password' maxLength={255}/>
      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">重置</Button>
        </Space>
      </Form.Item>
    </Form>
    );
}

export default PasswordForm;