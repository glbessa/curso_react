import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
