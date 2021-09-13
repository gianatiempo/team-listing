import { useState, useEffect } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { Switch, Route } from 'react-router-dom';
import { Home, Team } from './pages';
import logo from './assets/logo.svg';

const { Header, Content } = Layout;
const { Item } = Menu;

const headerStyle = { position: 'fixed', width: '100%', display: 'flex' };
const logoStyle = { marginTop: '-15px' };
const contentStyle = { padding: '24px 50px', marginTop: 64, height: 'calc(100vh - 64px)', overflow: 'auto' };
const avatarStyle = { width: 'calc(100% - 160px)', display: 'flex', justifyContent: 'flex-end' };

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser);
  }, []);

  return (
    <Layout>
      <Header style={headerStyle}>
        <img src={logo} alt='App Logo' style={logoStyle} />
        <Menu theme='dark' mode='horizontal' style={avatarStyle}>
          <Item key='user'>
            <Avatar src={user?.photoUrl} size='large' /> {`${user.name} ${user.lastName}`}
          </Item>
          <Item key='logout'>
            <LogoutOutlined />
          </Item>
        </Menu>
      </Header>
      <Content style={contentStyle}>
        <Switch>
          <Route path='/team/:id' component={Team} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default App;
