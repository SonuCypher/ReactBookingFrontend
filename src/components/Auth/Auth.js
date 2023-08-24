import React, { useState } from 'react'
import { Styles } from './styles'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../actions/auth';
import { setCurrentId } from '../../actions/posts';

const initialState = {firstName:'', lastName:'', email:'', password:''}
function Auth() {
    const [showPassword,setShowPassword] = useState(false)
    const [isSignUp,setIsSignup] = useState(false)
    const [formData , setFormData] = useState(initialState)
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    
    
    const handleShowPassword = ()=>{
        setShowPassword((prevPass)=>!prevPass)
    }

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]:e.target.value})

       
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        if(isSignUp){
            dispatch(signUp(formData,navigate))
            // dispatch(setCurrentId(null))
        }else{
            dispatch(signIn(formData,navigate))
            // dispatch(setCurrentId(null))
        }
        navigate('/')
    }

    const toggleSignup = ()=>{
        setIsSignup((prevState)=>!prevState)
        setShowPassword(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={Styles.paper} elevation={3}>
                <Avatar sx={Styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'login'}</Typography>
                <form style={Styles.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="FirstName" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="LastName" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <Button type = "submit" fullWidth variant='contained' color='primary' sx={Styles.submit} >
                        {isSignUp ? 'Sign Up':'Login'}
                    </Button>
                    <Grid item>
                        <Button onClick={toggleSignup}>
                            {isSignUp ? 'login' : 'sign up'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
