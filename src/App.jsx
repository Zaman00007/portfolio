import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import "./index.css"; 

function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Projects"} />
          <Route path="/contacts" element={"Contacts"} />

        </Routes>
      </Router>
    </main>
  )
}

export default App
