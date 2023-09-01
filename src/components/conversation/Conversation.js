import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./conversation.css"

function Conversation({chat,user}) {
    
    return (
        <div className='conversation'>
            <PersonIcon />
            <span className='conversationName'>Conversation</span>
        </div>
    )
}

export default Conversation
