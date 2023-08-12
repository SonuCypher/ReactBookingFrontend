import React, { useState } from 'react'
import { Styles } from './styles'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './input';

function Auth() {
    const [showPassword,setShowPassword] = useState(false)
    const [isSignUp,setIsSignup] = useState(false)
    const handleShowPassword = ()=>{
        setShowPassword((prevPass)=>!prevPass)
    }
    const handleChange = () => {}
    const handleSubmit=()=>{}

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
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
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
