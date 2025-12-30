import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AppLayout() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
