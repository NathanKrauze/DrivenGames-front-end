import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import CheckOut from "./Pages/CheckOut/CheckOut";
import GamesContext from "./contexts/GamesContext";
import tokenContext from "./contexts/TokenContext";
import { useState } from "react";


export default function App() {

  const [games, setGames] = useState([])
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>

      <tokenContext.Provider value={[token, setToken]}>
        <GamesContext.Provider value={{ games, setGames }}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CheckOut />} />
          </Routes>
        </GamesContext.Provider>
      </tokenContext.Provider>

    </BrowserRouter>
  )
}

