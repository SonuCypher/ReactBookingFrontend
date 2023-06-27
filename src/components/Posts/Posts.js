import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { CircularProgress, Grid } from '@mui/material'
import postsStyle from './styles'

function Posts() {
    const posts = useSelector((state)=>state.postsReducer)
    console.log(posts)
    return (
        
          posts.length ? <CircularProgress />:(
            <Grid className={postsStyle.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post)=> {
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post = {post} />
                        </Grid>
                    })
                }
            </Grid>
          )
        
    )
}

export default Posts
