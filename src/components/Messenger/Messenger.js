import { CircularProgress, Paper } from '@mui/material'
import "./Messenger.css";
import * as api from '../../api'
import React, { useEffect, useState } from 'react'
import Conversation from '../conversation/Conversation'
import Message from './Message/Message';
import Online from './online/Online';


function Messenger() {
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user?.result._id)
    const[userChats,setUserChats]= useState(null)
    const getUserChat = async(id)=>{
        return await api.fetchUserChat(id)
    }

    useEffect(()=>{
        getUserChat(user?.result._id)
        .then(chat=>{
            console.log(chat.data)
            setUserChats(chat.data)
        })
        .catch(error=>{console.log(error)})
    },[])
    console.log(userChats)


    return (
        <div style={{display:'flex',width:'100%',maxHeight:'450px',backgroundColor:"white",fontFamily:"monospace"}}>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'>
                    <h3 className='chatMenuInput'>Chat</h3>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                <div className='chatBoxTop'>
                    <Message />
                    <Message self={true} />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className='chatBoxBottom'>
                    <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                    <button className='chatSubmitButton'>Send</button>
                </div>
                </div>
            </div>
            <div className='chatOnline'>
                <div className='chatOnlineWrapper'>
                <Online />
                </div>
            </div>

        </div>
    )
}

export default Messenger

/* 
        <div style={{display:'flex',justifyContent:"space-between",height:'200px'}}>
            <Paper sx={{width:'20%',height:'100%'}}>
                {
                   userChats ? userChats?.map((chat,index)=>{
                        return(
                            <div key={index}>
                                <Conversation chat={chat} user={user?.result} />

                            </div>
                        )
                    }) : <CircularProgress />
                }
            </Paper>
            <Paper sx={{width:'33%',height:'100%',padding:'15px'}}>
                <div style={{padding:'10px'}}>

                </div>
                
            </Paper>
            <Paper sx={{width:'20%',height:'100%',padding:'15px'}}>
                online
            </Paper>
        </div>
*/
