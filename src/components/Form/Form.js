import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { TextField,Button,Typography,Paper } from '@mui/material'
import { buttonSubmit, fileInput, form, paper, root } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, setCurrentId, updatePost } from '../../actions/posts';


function Form() {
    const [postData, setPostData] = useState({ title: '', description: '', tags: '', selectedFile: ''})
    const currentId = useSelector((state)=> state.posts.currentId)
    const post = useSelector((state)=> currentId ? state.posts.posts.find((p)=> p._id === currentId): null)
    console.log(useSelector((state)=> currentId ? state.posts.posts.find((p)=> p._id === currentId): null))
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    
    useEffect(()=> {
        if(post) setPostData(post)
    },[post])
    const handleSubmit=(e) => {
        e.preventDefault();
        
        if(currentId){
            dispatch(updatePost(currentId, {...postData, name:user?.result?.name}))
        }else{

            dispatch(createPost({...postData, name:user?.result?.name}))
        }
        clear()
    }
    if(!user?.result?.name){
        return (
            <Paper sx={paper}>
                <Typography variant='h6' align="center">
                sign in before proceeding
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        dispatch(setCurrentId(null))
        setPostData({ title: '', description: '', tags: '', selectedFile: ''})
    }

    return (
        <Paper sx={paper}>
            <form autoComplete='off' noValidate style={{...root,...form} } onSubmit={handleSubmit}>
            <Typography variant='h6'>{currentId ? 'Editing':'Creating'} a site </Typography>
                
                <TextField name='title' variant='outlined' label="Location" fullWidth value={postData.title} onChange={(e)=>{setPostData({...postData,title:e.target.value})}} />
                <TextField name='description' variant='outlined' label="Description" fullWidth value={postData.description} onChange={(e)=>{setPostData({...postData,description:e.target.value})}} />
                <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>{setPostData({...postData,tags:e.target.value.split(',')})}} />
                <div style={fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({ ...postData,selectedFile:base64})}  />
                </div>
                <Button className={buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                
            
            </form>

        </Paper>
    )
}

export default Form
