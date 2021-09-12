import { Layout } from 'antd';
import logo from './assets/logo.svg';

const { Header, Content } = Layout;

const headerStyle = { position: 'fixed', zIndex: 1, width: '100%' };
const logoStyle = { marginTop: '-15px' };
const contentStyle = { padding: '24px 50px 0', marginTop: 64, height: 'calc(100vh - 64px)' };

const App = () => (
  <Layout>
    <Header style={headerStyle}>
      <img src={logo} alt='App Logo' style={logoStyle} />
    </Header>
    <Content style={contentStyle}>Content</Content>
  </Layout>
);

export default App;
