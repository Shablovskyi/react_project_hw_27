import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import History from './components/History';

const App = () => {
    return (
        <Router>
            <nav>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>
                <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>About</NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="history" element={<History />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
