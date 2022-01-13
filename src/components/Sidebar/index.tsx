import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';

const { SubMenu } = Menu;
const { Sider } = Layout;

export function Sidebar() {
  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      width={200}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Clientes">
          <Menu.Item key="1">Incluir</Menu.Item>
          <Menu.Item key="2">Alterar</Menu.Item>
          <Menu.Item key="3">Excluir</Menu.Item>
          <Menu.Item key="4">Visualizar</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Configurações">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}