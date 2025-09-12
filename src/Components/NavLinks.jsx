import React from "react";
import { logout } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const matches = useSelector((state) => state.feed.matches);

  const hadleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="flex-none gap-3">
      {user ? (
        <>
          <Link to="/feed" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/matches" className="btn btn-ghost">
            Matches
            <span className="badge badge-primary ml-2"> {matches.length}</span>
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact
          </Link>

          <label className="toggle text-base-content mx-3">
            <input
              type="checkbox"
              value="light"
              className="theme-controller px-2"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user-avatar"
                  src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAZlBMVEX///8AAAD8/Pzo6Ojt7e0tLS3d3d29vb1FRUWnp6f5+fnj4+MqKirw8PC0tLQ1NTUICAh0dHRSUlIRERGUlJTDw8MbGxvJyckiIiJjY2OKiop8fHxLS0uCgoI9PT2cnJzS0tJra2vuwsyhAAADeklEQVR4nO2b23KCMBBAG5AgIPe7oOL//2RFi8VyS3Sz6cOel844TjmTDZvNJn59EQRBEARBEARBEARhlrbjOHZp6hYZsSubsIhYT1SETbnTLXSHZyF7Jcw83VJf5jFlU9Kj5njahxmrHsvWaOXGC1Y9satLy0xWtBhLNM0ybymGA5UWMf73NZwScnwtd2u0eg7oc8ytBbQYu2KLHYW0GMtwtTpBLcZQp5gvFsWeGjOSgbAWY5iJf25NXCLE08oltBjr0LzWlsUpDZaWeZby2mPVPOJJ4kGH5OVIejlIXqK5fgBrgokn1QdnJK9W0qv6p14Fktd6+azPSy6t4q1EmaRXi+QlU030HJG8SkkvrLzqya2PKVbJKrjnGEh8JC/JiY+39fCkvBB33XsJrRpPS6qQ7hC9DPGUf0LUkplhyM1W0ZoVu21oXP9hFO+IVGGY7+KAt50sEi2dfH9rxBJNnd+Nvu8VbV2ccFq2Si86hLjx+LuY+IeWr4HZl+vPE5yHmTE5Heppgx8rB/N8wb/2z45/po/n/C0TE/vnPfRjzHnGh+fnwyeufYyTfXiwzm19Cp4azyCjxLKsngMz3lD4pse5tzN+P/ltY1Slei17HLHKXpo8rl2Nv6h8mQyi17l0nR+K8vr6tShQrDV99w4Ofx00lzszZzRKxfJo+sBbNOvMHnqVpp3V1dyXonz1P3/EagMzskJrVnugU6Ul2e/9y1lR/9eQ2QXNsTe2H/IGsm2cKUqWcrlDjnlUzP3tY+NtFHToPo9iD3ivwrNAvCzoZsVKZSoF8MbNB9JiDLYYgxou4AH7MNOPAc36sh3oNSC7wLInHGskcFpyfcst4FLFBdQLbJU0IMN4CyRUWcFhcv2ABbVtg3wbe6BKfbik+gAotQrdQJMB6LYabJbogckUMJXXGJgqDKKAfgWonC5hJ9gBrIvSydz32iLtoLRuYoB1DqDWLeVDhfIA3KPjspdM5mnBW4fmp12AHhVX1EzZa0xTaiWdE6P5UCtW0zf5tLBQeL2jfH+SnZX2pN13Y6n81KN8p69jITTw/YvsqhRlOOejntyFzCPekRpvRMcsjTs0q7vZRWTFrDL8X57s8qRYlSqe533YmE6zVACdT47On6gZOx40bVX8Tre0qNpTwPWduY8xuzxweoK8+0+/zCQIgiAIgiAIgiAIPXwD4sUtUHDV0LUAAAAASUVORK5CYII=`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/profile"
                  className="flex justify-center font-medium mb-2"
                >
                  Profile
                </Link>
              </li>
              <li>
                <p className="font-medium mb-2">{user.email}</p>
              </li>
              <li>
                <button onClick={hadleLogout} className="btn btn-error btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
