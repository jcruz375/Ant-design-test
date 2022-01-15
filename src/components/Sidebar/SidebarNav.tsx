import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export function SidebarNav() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub2" icon={<LaptopOutlined />} title="Dashboard" />
      <SubMenu key="sub1" icon={<UserOutlined />} title="Clientes">
        <Menu.Item key="1">Incluir</Menu.Item>
        <Menu.Item key="2">Alterar</Menu.Item>
        <Menu.Item key="3">Excluir</Menu.Item>
        <Menu.Item key="4">Visualizar</Menu.Item>
      </SubMenu>
    </Menu>
  )
}