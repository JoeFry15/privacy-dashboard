import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { EmailLeakChecker } from './components/EmailLeakChecker'
import { Home } from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaks" element={<EmailLeakChecker />} />
        <Route path="/deletion" element={<></>} />
        <Route path="/access" element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
