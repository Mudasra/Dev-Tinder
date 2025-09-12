import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import Contact from "./Components/Contact";
import MatchPage from "./Components/MatchPage";
import ProfilePage from "./Components/ProfilePage";
import ChatPage from "./Components/ChatPage";

function AppContent() {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/chat") ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>} />
        <Route path="/login" element={<Login />} />
        {user ?(
        <>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/matches" element={<MatchPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/chat/:matchId" element={<ChatPage />}/>
        </>)
        : (<Route path="*" element={<Navigate to={"/login"}/>} replace/>
        )}
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
