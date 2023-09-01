import React,{useEffect} from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { getPosts } from './actions/posts'
import PostDetails from "./components/postDetails/PostDetails";
import Messenger from "./components/Messenger/Messenger";

function App() {
  


  const auth = JSON.parse(localStorage.getItem('profile'))
  console.log(auth)

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={auth ? <PostDetails />:<Navigate to="/auth" />} />
          <Route path="/auth" element={!auth ? <Auth /> : <Navigate to="/" />} />
          <Route path="/messenger" element={ auth ? <Messenger /> : <Navigate to="/auth" />}/>
        </Routes>
      </Container>
    
    </BrowserRouter>
  
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
