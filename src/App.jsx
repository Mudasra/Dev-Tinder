import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Contact from "./Components/Contact"
import Login from "./Components/Login"

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
