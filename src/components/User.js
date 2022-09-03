import React from 'react'
import { Outlet,Link, useSearchParams } from 'react-router-dom';

export const User = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <>
        <nav className='featured-news-container'>
        {/* 
        <Link to="user1">
            User 1
        </Link>
        <Link to="user2">
            User 2
        </Link>
        <Link to="user3">
            User 3
        </Link>

    */}

        <h1>User1</h1>
        <h1>User2</h1>
        <h1>User3</h1>
        <button onClick={()=> setSearchParams({filter :'active'})}>Active User</button>
        <button onClick={()=> setSearchParams({})}>Reset Filter</button>
        {showActiveUsers ? (
            <h2>Showing Active Users</h2>
        ):(
            <h2>
                Showing all users
            </h2>
        )}
    </nav>
    <Outlet/>
        </>
        );
}
