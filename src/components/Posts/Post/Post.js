import React from 'react'

import { Button, Card, CardMedia, Typography } from '@mui/material';
import postStyles from './styles'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
function Post({post}) {
    return (
        <Card className={postStyles.card}>
            <CardMedia className={postStyles.media} image={post.selectedFile} title={post.title} />
            <div className={postStyles.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                

            </div>
            <div className={postStyles.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                    <MoreHorizIcon fontSize='default'></MoreHorizIcon>
                </Button>
            </div>
        </Card>
    )
}

export default Post
