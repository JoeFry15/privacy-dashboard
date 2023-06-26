import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { EmailLeakChecker } from './components/Leaks/EmailLeakChecker'
import { Home } from './components/Navigation/Home'
import { Deletion } from './components/Deletion/Deletion'
import { Access } from './components/Access/Access'
import { Settings } from './components/Settings/Settings'
import { ScamHelp } from './components/ScamHelp/ScamHelp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaks" element={<EmailLeakChecker />} />
        <Route path="/deletion" element={<Deletion />} />
        <Route path="/access" element={<Access />} />
        <Route path="/scam-help" element={<ScamHelp />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
