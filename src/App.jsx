import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Menu from "./components/Menu"
import Acceuil from "./components/Acceuil"
import Mesrv from "./pages/Mesrv"
import Contact  from "./pages/Contact"
import Login from "./pages/auth/Login"
import Sign from "./pages/auth/Sign"


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Acceuil /> }/>
            <Route path="Mesrv" element={<Mesrv />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Sign" element={<Sign />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
