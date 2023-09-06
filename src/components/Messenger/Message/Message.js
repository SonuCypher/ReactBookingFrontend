import React from 'react'
import "./Message.css"
import moment from "moment";

function Message({message,self}) {
    return (
        <div className={ self ? "message self" : "message"}>
            <div className='messageTop'>
                <img className='messageImage' src='https://as1.ftcdn.net/v2/jpg/06/23/63/10/1000_F_623631095_ga6qXoCBGPpzUV7H7mO2ufHp9QeWoB0y.jpg' alt=''/>
            <p className='messageText'>{message.text}</p>
            </div>
            <div className='messageBottom'>{moment(message.createdAt).fromNow()}</div>
        </div>
    )
}

export default Message
