import { Button, Form, Input, Space } from 'antd';
import React from 'react';
import { checkPassword } from '../service/user';

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

    const validateOldPassword = async (_, value) => {
        try {
            if (await checkPassword(value)) {
                return Promise.resolve();
            } else {
                return Promise.reject();
            }
        } catch (error) {
            return Promise.reject(new Error('服务器错误'));
        }
    };

    return (
    <Form 
      form={form} 
      name="validateOnly" 
      layout="vertical" 
      autoComplete="off" 
    >
      <Form.Item
        name="old_password"
        label="请输入原密码"
        rules={[
          {
            required: true,
            message: '请输入原密码',
          },
          {
            validator: validateOldPassword,
            message: '原密码错误',
          }
        ]}
      >
        <Input />
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
        <Input />
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