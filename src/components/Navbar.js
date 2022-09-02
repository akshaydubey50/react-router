import React from 'react'
import { NavLink }  from 'react-router-dom';

export const Navbar = () => {

    const navLinkStyle =({isActive})=>{
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
    return (
        <nav className='primary-header'>
        <NavLink  style = {navLinkStyle} to="/">Home</NavLink>
        <NavLink  style = {navLinkStyle} to="/about">About</NavLink>
        <NavLink  style = {navLinkStyle} to="/products">Products</NavLink>
        <NavLink  style = {navLinkStyle} to="/user">User</NavLink>

        </nav>
        )
}
