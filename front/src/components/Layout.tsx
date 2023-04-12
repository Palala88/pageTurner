import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
type Props = {
  children: React.ReactNode;
};
const LayoutComponent = (props: Props): JSX.Element => {
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          background: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: 'auto 0',
            marginRight: '20px',
          }}
        >
          <Link to={'/home'}>
            <img
              src={require('../assets/logoText_dark.png')}
              alt="Logo"
              style={{ padding: '5px', border: 'solid 1px black' }}
            />
          </Link>
        </div>
        {/* <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        /> */}
      </Header>
      <Content className="site-layout" style={{ padding: '0 30px' }}>
        <div
          style={{ padding: 20, minHeight: 400, background: colorBgContainer }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        TESTESTTESTTESTESTTESTTESTESTTESTTESTESTTESTTESTESTTEST
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;

