import React from 'react'

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import postStyles from './styles'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
function Post({post}) {
    return (
        <Card sx={postStyles.card}>
            <CardMedia sx={postStyles.media} image={post.selectedFile} title={post.title} />
            <div style={postStyles.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                

            </div>
            <div style={postStyles.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                    <MoreHorizIcon fontSize='default'></MoreHorizIcon>
                </Button>
            </div>
            <div style={postStyles.details}>
            <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
            <CardContent>

                <Typography sx={postStyles.title} variant='h5' gutterBottom>{post.description}</Typography>
            </CardContent>
            <CardActions sx={postStyles.cardActions}>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
