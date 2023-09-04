import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingIn from "./Pages/SingIn/SingIn";
import HomePage from "./Pages/HomePage/HomePage";
import SingUp from "./Pages/SingUp/SingUp";
import ChekOut from "./Pages/ChekOut/ChekOut";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/cadastro" element={<SingUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<ChekOut />} />

      </Routes>
    </BrowserRouter>

  )
  //
}

