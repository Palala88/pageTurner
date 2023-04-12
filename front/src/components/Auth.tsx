import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';

const Auth = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',

        backgroundImage: `url(${require('../assets/background.png')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          margin: '20px 0',
        }}
      >
        <Link to={'/'}>
          <img
            src={require('../assets/logoText_dark.png')}
            alt="Logo"
            width={'150px'}
            style={{
              display: 'block',
              padding: '5px',
              border: 'solid 1px black',
              margin: '0 auto',
            }}
          />
        </Link>
      </div>
      <div
        style={{
          background: 'white',
          width: '500px',
          borderRadius: '16px',
          boxShadow: '0 0 24px 0 rgb(22 33 39 / 10%)',
          padding: '32px 64px',
          margin: 'auto',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Sing In</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Your Username"
              style={{
                height: '42px',
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Your Password"
              style={{
                height: '42px',
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sing In
            </Button>
          </Form.Item>
          <Form.Item>
            <p
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Don't have an account?
              <Link to={'users/sign_up'}>
                {' '}
                <a href="users/sign_up" className="login-form-singUp">
                  Sing Up
                </a>
              </Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Auth;

