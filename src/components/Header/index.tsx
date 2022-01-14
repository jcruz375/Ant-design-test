import { Button, Layout, Menu, Space } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { MenuOutlined } from '@ant-design/icons';
import './Header.scss';

const { Header: AntdHeader } = Layout;

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const screens = useBreakpoint();

  if (screens.xs) {
    return (
      <AntdHeader className="header">
        <Space direction="horizontal">
          <Button type="text" icon={<MenuOutlined />} onClick={onOpen}/>
          <Menu className="header-menu" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Clientes</Menu.Item>
            <Menu.Item key="2">Produtos</Menu.Item>
            <Menu.Item key="3">Fornecedores</Menu.Item>
          </Menu>
        </Space>
      </AntdHeader>
    );
  };

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