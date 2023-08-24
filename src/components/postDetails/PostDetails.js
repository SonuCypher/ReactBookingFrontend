import { CircularProgress, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import { Styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../actions/posts'
import Conversation from '../conversation/Conversation'

function PostDetails() {

    const { post } = useSelector((state)=> state.posts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        dispatch(getPost(id))
    },[id])
    if(post){
        return (

         <div style={{display:'flex',justifyContent:"space-between"}}>
               <Paper sx={{minWidth:"300px",padding:'20px', borderRadius:'15px',display:'flex',width:'35%'}} elevation={6}>
            <div >
            <div>
              <Typography variant="h3" component="h2">{post.title}</Typography>
              <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
              <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
              <Typography variant="h6">Created by: {post.name}</Typography>
              <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
              <Divider sx={{ margin: '20px 0' }} />
              </div>
            <div >
              <img style={{width:"100%"}}  src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
          </div>
            </Paper>
            <Paper sx={{Width:'35%',minWidth:'30%',borderRadius:'15px',backgroundColor:"transparent"}}>
            <Conversation /> 
            <Conversation /> 
            <Conversation /> 
            <Conversation /> 
            </Paper>
         </div>
        )

    }else{
        return <CircularProgress />
    }
}

export default PostDetails
