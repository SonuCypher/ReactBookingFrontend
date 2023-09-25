import React, { useEffect, useState } from 'react'
import * as api from "../../api"
import PersonIcon from '@mui/icons-material/Person';
import "./conversation.css"

function Conversation({friend}) {

    
    return (
        <div className='conversation'>
            
            <img className='conversationImg' src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nomad_icon_132150.png' alt={<PersonIcon />}/>
            <span className='conversationName'>{friend.name}</span>
        </div>
    )
}

export default Conversation



// function Conversation({chat,currentUser}) {
//     const [user,setUser]= useState(null)
//     const getUser = async(id)=>{
//         try {
//             return await api.getUser(id)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         const friendId = chat.members.find((member)=> member !== currentUser._id)
//         getUser(friendId)
//         .then(user => setUser(user.data))
//         .catch(error => console.log(error))
//     },[chat,currentUser])
    
//     return (
//         <div className='conversation'>
            
//             <img className='conversationImg' src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nomad_icon_132150.png' alt={<PersonIcon />}/>
//             <span className='conversationName'>{user?.name}</span>
//         </div>
//     )
// }