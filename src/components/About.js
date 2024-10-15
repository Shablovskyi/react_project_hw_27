import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>Це сторінка про нас</h1>
            <nav>
                <NavLink to="team" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
                    Команда
                </NavLink>
                <NavLink to="history" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
                    Історія
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default About;
