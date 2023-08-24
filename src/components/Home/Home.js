import React,{useEffect} from "react";
import { Container, Grid, Grow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../actions/posts'

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function Home() {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.posts.currentId);
  const auth = useSelector((state)=> state.auth.authData)
  console.log(auth)

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch,auth]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
