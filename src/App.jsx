import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import useAppStore from './store/useAppStore';

function App() {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <AppRoutes />;
}

export default App;
