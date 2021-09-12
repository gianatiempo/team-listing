import { Layout } from 'antd';

const { Header, Content } = Layout;

const headerStyle = { position: 'fixed', zIndex: 1, width: '100%' };
const contentStyle = { padding: '24px 50px 0', marginTop: 64, height: 'calc(100vh - 64px)' };

const App = () => (
  <Layout>
    <Header style={headerStyle}>
      <div className='logo' />
    </Header>
    <Content style={contentStyle}>Content</Content>
  </Layout>
);

export default App;
