import './App.less';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';
import HomePage from './pages';

function App() {
  return (
    <SidebarDrawerProvider>
      <HomePage />
    </SidebarDrawerProvider>
  );
}

export default App;