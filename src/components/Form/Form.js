import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { TextField,Button,Typography,Paper } from '@mui/material'
import { buttonSubmit, fileInput, form, paper, root } from './styles'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

function Form() {
    const [postData, setPostData] = useState({creator: '', title: '', description: '', tags: '', selectedFile: ''})
    const dispatch = useDispatch()
    
    const handleSubmit=(e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }
    const clear = () => {}

    return (
        <Paper className={paper}>
            <form autoComplete='off' noValidate className={`${root} ${form} `} onSubmit={handleSubmit}>
            <Typography variant='h6'>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,creator:e.target.value})}} />
                <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>{setPostData({...postData,title:e.target.value})}} />
                <TextField name='description' variant='outlined' label="Description" fullWidth value={postData.description} onChange={(e)=>{setPostData({...postData,description:e.target.value})}} />
                <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>{setPostData({...postData,tags:e.target.value})}} />
                <div className={fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({ ...postData,selectedFile:base64})}  />
                </div>
                <Button className={buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                
            </Typography>
            </form>

        </Paper>
    )
}

export default Form
