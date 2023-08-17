import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import postStyles from "./styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost, setCurrentId } from "../../../actions/posts";
function Post({ post }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }
    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  }

  return (
    <Card sx={postStyles.card}>
      <CardMedia
        sx={postStyles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div style={postStyles.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?._id === post?.creator)&&(
        <div style={postStyles.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => dispatch(setCurrentId(post._id))}
        >
          <MoreHorizIcon fontSize="default"></MoreHorizIcon>
        </Button>
      </div>
      )}
      
      <div style={postStyles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={postStyles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions sx={postStyles.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => {
          dispatch(likePost(post._id))
          dispatch(setCurrentId(null))
        }}>
            <Likes />
          
        </Button>

{(user?.result?._id === post?.creator) &&(
 <Button size="small" color="primary" onClick={() => {
  dispatch(deletePost(post._id))
  dispatch(setCurrentId(null))
  }}>
  <DeleteIcon fontSize="small" />
  Delete
</Button>
)}

       
      </CardActions>
    </Card>
  );
}

export default Post;
