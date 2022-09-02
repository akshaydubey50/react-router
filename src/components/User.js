import React from 'react'
import { Outlet,Link } from 'react-router-dom';

export const User = () => {
    return (
        <>
        <nav className='featured-news-container'>
        <Link to="user1">
            User 1
        </Link>
        <Link to="user2">
            User 2
        </Link>
        <Link to="user3">
            User 3
        </Link>

        </nav>
        <Outlet/>
        </>
        );
}
