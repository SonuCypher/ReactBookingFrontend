import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'


function Posts() {
    const posts = useSelector((state)=>state.postsReducer)
    console.log(posts)
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts
