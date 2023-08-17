import React, { useEffect, useState } from 'react'
import { AppBar,Avatar,Button,Toolbar,Typography } from "@mui/material";
import { appBarStyle,brandContainer,headingStyle,imageStyle, profile, toolbar, userName} from "./style"
import {Link, useLocation, useNavigate} from "react-router-dom"
import stillsites from "../../images/memories.png";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'


function Navbar() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const logout = () => {
    dispatch({type:'LOGOUT'})
    navigate('/')
    setUser(null)
  }

  useEffect(()=> {
    const token = user?.token

    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location,user?.token])

    return (
        <AppBar sx={appBarStyle} position="static" color="inherit">
        <div style={brandContainer}>

        <Typography component={Link} to="/" sx={headingStyle} variant="h2" align="center">
          StillSites
        </Typography>
        <img styles={imageStyle} src={stillsites} alt="stillsites" height="60" />
        </div>
        <Toolbar sx={toolbar}>
          {user ? (
            <div style={profile}>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography sx={userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
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
