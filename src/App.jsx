import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import Contact from "./Components/Contact";
import MatchPage from "./Components/MatchPage";

function AppContent() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/login" element={<Login />} />
        {user ?(
        <>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/matches" element={<MatchPage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/contact" element={<Contact />}/>
        </>)
        : <Navigate to="/login" replace/>}
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
