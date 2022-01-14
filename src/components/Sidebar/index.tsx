import { Drawer, Grid, Layout } from 'antd';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

const { Sider } = Layout;
const { useBreakpoint } = Grid;

export function Sidebar() {
  const { isDrawerOpen, onClose } = useSidebarDrawer();

  const screens = useBreakpoint();

  if (screens.xs) {
    return (
      <Drawer
        title="Basic Drawer"
        closable={true}
        onClose={onClose}
        visible={isDrawerOpen}
        placement="left"
      >
        <SidebarNav />
      </Drawer>
    )
  }

  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
      width={200}
    >
      <SidebarNav />
    </Sider>
  );
}