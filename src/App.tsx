import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmailLeakChecker } from './components/EmailLeakChecker'

function App() {

  return (
    <div className="App">
      <h1>Your Privacy Dashboard</h1>
      <EmailLeakChecker />
    </div>
  )
}

export default App
