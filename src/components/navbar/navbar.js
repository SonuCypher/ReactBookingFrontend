import React, { useCallback, useEffect, useState } from 'react'
import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import { appBarStyle,brandContainer,headingStyle,imageStyle, profile, toolbar, userName} from "./style"
import {Link, useLocation, useNavigate} from "react-router-dom"
import stillsites from "../../images/memories.png";
import { useDispatch } from 'react-redux';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import decode from 'jwt-decode'


function Navbar() {
  const [user,setUser] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const logout = useCallback(() => {
    dispatch({type:'LOGOUT'})
    navigate('/')
    setUser(null)
  },[dispatch,navigate])

  useEffect(()=> {
    const token = user?.token

    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        setUser(null);
        dispatch({ type: 'LOGOUT' });
      navigate('/');
     
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location,user?.token,dispatch,navigate])

    return (
        <AppBar sx={appBarStyle} position="static" color="inherit">
        <div style={brandContainer}>

        <img styles={imageStyle} src={stillsites} alt="stillsites" height="60" />
        <Typography component={Link} to="/" sx={headingStyle} variant="h3" align="center">
          NomadRoad
        </Typography>
        </div>
        <Toolbar sx={toolbar}>
          {user ? (
            <div style={profile}>
              <Button component={Link} to='/messenger'>
              <ChatOutlinedIcon style={{fill:'#000338'}}  fontSize='large'/>
              </Button>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography sx={userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' style={{backgroundColor:'#000338'}} onClick={logout}>logout</Button>
            </div>
          ):(
            <Button component={Link} to='/auth' variant='contained' color = "primary">Sign in</Button>
          )

          }
        </Toolbar>

      </AppBar>
    )
}

export default Navbar
