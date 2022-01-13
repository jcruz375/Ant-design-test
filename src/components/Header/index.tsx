import { Layout, Menu } from 'antd';
import './Header.scss'; 

const { Header: AntdHeader} = Layout;

export function Header() {
  return (
    <AntdHeader className="header">
      <Menu className="header-menu" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Clientes</Menu.Item>
        <Menu.Item key="2">Produtos</Menu.Item>
        <Menu.Item key="3">Fornecedores</Menu.Item>
      </Menu>
    </AntdHeader>
  );
}