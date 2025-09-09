import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import Contact from "./Components/Contact";

function AppContent() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/feed"
          element={user ? <Feed /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/contact"
          element={user ? <Contact /> : <Navigate to="/login" replace />}
        />
        <Route path="/body" element={<Body />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <AppContent />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
