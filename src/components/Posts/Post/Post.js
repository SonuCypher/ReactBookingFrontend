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
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost, setCurrentId } from "../../../actions/posts";
function Post({ post }) {
  const dispatch = useDispatch();
  return (
    <Card sx={postStyles.card}>
      <CardMedia
        sx={postStyles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div style={postStyles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={postStyles.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => dispatch(setCurrentId(post._id))}
        >
          <MoreHorizIcon fontSize="default"></MoreHorizIcon>
        </Button>
      </div>
      <div style={postStyles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={postStyles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions sx={postStyles.cardActions}>
        <Button size="small" color="primary" onClick={() => {
          dispatch(likePost(post._id))
          dispatch(setCurrentId(null))
        }}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likecount}
        </Button>
        <Button size="small" color="primary" onClick={() => {
          dispatch(deletePost(post._id))
          dispatch(setCurrentId(null))
          }}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
