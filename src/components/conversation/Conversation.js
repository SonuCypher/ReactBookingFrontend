import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./conversation.css"

function Conversation({chat,user}) {
    
    return (
        <div className='conversation'>
            
            <img className='conversationImg' src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nomad_icon_132150.png' alt={<PersonIcon />}/>
            <span className='conversationName'>jhon wick</span>
        </div>
    )
}

export default Conversation
