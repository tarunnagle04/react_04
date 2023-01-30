import React from 'react';
import { NavLink } from "react-router-dom";
import './HeaderFile.css'

const HeaderFile = () => {
    let activeStyle = {
        textDecoration: "none",
        fontSize: '25px',
        color: '#bf74bb',
        fontStyle: 'italic',
        fontWeight: '500'
    };

    let unActiveStyle = {
        textDecoration: "none",
        fontSize: '25px',
        color: '#fff',
        fontStyle: 'italic',
        fontWeight: '500'
    }

    return (
        <div className='header-nav'>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : unActiveStyle }>Home</NavLink>
            <NavLink to="/students" style={({ isActive }) => isActive ? activeStyle : unActiveStyle }>Students</NavLink>
            <NavLink to="/contact-us" style={({ isActive }) => isActive ? activeStyle : unActiveStyle }>Contact Us</NavLink>
        </div>
    )
}

export default HeaderFile