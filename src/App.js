import React from "react";
import { Container } from "@mui/material";

import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/postDetails/PostDetails";
import Messenger from "./components/Messenger/Messenger";

function App() {
  
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" />} />
          <Route path="/messenger" element={ <Messenger />}/>
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
