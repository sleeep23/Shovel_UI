import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './tabs.css'
import { Link } from 'react-router-dom'

function Tabs() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/" className="text-3xl">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-3xl">About</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Tabs