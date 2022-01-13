import { Breadcrumb, Divider, Layout } from 'antd';
import './App.less';
import { Header } from './components/Header';
import { NewClientForm } from './components/NewClientForm';
import { Sidebar } from './components/Sidebar';
import { UsersTable } from './components/UsersTable';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Cliente</Breadcrumb.Item>
            <Breadcrumb.Item>Cadastrar</Breadcrumb.Item>
          </Breadcrumb>

          <NewClientForm />
          <Divider />
          <Content>
            <UsersTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;