import { Paper } from '@mui/material'
import React from 'react'


function Messenger() {
    return (
        <div style={{display:'flex',justifyContent:"space-between",height:'200px'}}>
            <Paper sx={{width:'20%',padding:'15px',height:'100%'}}>
                this is message
            </Paper>
            <Paper sx={{width:'33%',height:'100%',padding:'15px'}}>
                this is message
            </Paper>
            <Paper sx={{width:'20%',height:'100%',padding:'15px'}}>
                this is message
            </Paper>
        </div>
    )
}

export default Messenger
