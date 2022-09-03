import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const {userId} = useParams();
    return (
        <>
        <h1>Details about the user {userId}</h1>
        </>
    )
}
