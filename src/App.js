import React,{useEffect} from "react";
import { AppBar, Container, Typography, Grid, Grow } from "@mui/material";
import { appBarStyle,headingStyle,imageStyle} from "./styles"
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import stillsites from "./images/memories.png";

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  return (
    <Container maxWidth="md">
      <AppBar sx={appBarStyle} position="static" color="inherit">
        <Typography sx={headingStyle} variant="h2" align="center">
          StillSites
        </Typography>
        <img styles={imageStyle} src={stillsites} alt="stillsites" height="60" />
      </AppBar>
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
