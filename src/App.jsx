import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import NavBar from "./Components/NavBar"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./Components/Feed"
import Contact from "./Components/Contact"
import { useEffect, useState } from "react"

function App() {
  const [user , setUser] = useState(localStorage.getItem("loggedInUser"));

  useEffect(() =>{
    if(user){
      localStorage.setItem("loggedInUser" , user)
    }else{
      localStorage.removeItem("loggedInUser")
    }
  } , [user])
  return (
    <>
    <Provider store={appStore}>
       <BrowserRouter basename="/">
    <NavBar user={user} onLogout={() => setUser(null)}/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
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
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App


