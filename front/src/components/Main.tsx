import React from 'react';
import './index.css';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Main = (): JSX.Element => {
  return (
    <Row>
      <Col flex="50%">
        <div
          style={{
            marginLeft: '80px',
            marginTop: '200px',
          }}
        >
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <img
              src={require('../assets/logo.png')}
              alt="Logo"
              width={'150'}
              height={'140'}
              style={{
                margin: '0 auto',
                display: 'block',
              }}
            />
            <h1
              style={{
                textAlign: 'center',
              }}
            >
              Welcome to PageTurner
            </h1>
            <p>
              PageTurner is an innovative project that allows for convenient and
              quick access to a wide variety of books of any genre. The
              application features a user-friendly interface that enables easy
              searching for the desired book using various criteria. You can
              purchase an e-book or rent it for a certain period of time. We
              provide secure payment for electronic books and protection against
              copying. Join our online library today and enjoy reading your
              favorite books anytime, anywhere!
            </p>
          </div>
        </div>
      </Col>
      <Col flex="50%">
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'end',
            marginRight: '130px',
          }}
        >
          <Link to={`users/sign_in`}>
            <Button
              type="default"
              htmlType="submit"
              className="sing-form-button button"
            >
              Sing In
            </Button>
          </Link>
          <Link to={`users/sign_up`}>
            <Button
              type="default"
              htmlType="submit"
              className="sing-form-button button"
            >
              Sing Up
            </Button>
          </Link>
        </div>
        <img
          src={require('../assets/welcome-book.jpeg')}
          width={'100%'}
          alt="book"
          style={{ display: 'block', margin: '80px auto 0' }}
        />
      </Col>
    </Row>
  );
};
export default Main;

