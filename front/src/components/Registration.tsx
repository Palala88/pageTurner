import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

const Registration = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `url(${require('../assets/singUp_background.png')})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        display: 'flex',
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
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '100px',
          marginTop: '50px',
        }}
      >
        Sing Up
      </h1>
      <div
        style={{
          width: '35%',
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                warningOnly: true,
                message: 'Please input Email!',
              },
            ]}
          >
            <Input
              placeholder="Your Email"
              style={{
                height: '42px',
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                warningOnly: true,
                message: 'Please input Password!',
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="8+ characters"
              style={{
                height: '42px',
              }}
            />
          </Form.Item>

          <Form.Item>
            <Link to={'/home'}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button button"
              >
                Get Started
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Registration;

