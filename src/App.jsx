import { Router } from "express";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

}

