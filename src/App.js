import React,{useEffect} from "react";
import { Container, Grid, Grow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/navbar/navbar";

function App() {
  const dispatch = useDispatch()
  const currentId = useSelector((state)=>state.posts.currentId)


  useEffect(() => {
    dispatch(getPosts())
  },[currentId,dispatch])
  return (
    <React.Fragment>
    <Container  maxWidth="lg">
      <Navbar />
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
    </Container>
    </React.Fragment>
  );
}

export default App;

/*  
 //   


*/

// import { BrowserRouter, Route, Routes } from "react-router-dom";

//  <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/posts" element={<List/>}></Route>
//         <Route path="/posts/:id" element={<Ground/>}></Route>
//       </Routes>
//     </BrowserRouter>
