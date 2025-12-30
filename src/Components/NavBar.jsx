import { Link } from 'react-router-dom';
import useAppStore from '../store/useAppStore';

function Navbar() {
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Jira Clone
        </Link>
      </div>
      <div className="flex-none gap-2">
        <button
          className="btn btn-sm"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;
