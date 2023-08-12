import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Input(props) {
    return (
        <Grid item xs={12} sm={props.half ? 6 : 12}>
            <TextField 
                name={props.name}
                onChange={props.handleChange}
                variant='outlined'
                required
                fullWidth
                label={props.label}
                autoFocus={props.autoFocus}
                type={props.type}
                InputProps={props.type === 'password' && {
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton onClick={props.handleShowPassword}>
                                {props.type === "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Grid>
    )
}

export default Input
