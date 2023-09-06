import React from 'react'
import "./online.css"

function Online() {
    return (
        <div className='chatOnline'>
            <div className='chatOnlineFriend'>
                <div className='chatOnlineImgContainer'>
                    <img className='chatOnlineImg' src='https://cdn.icon-icons.com/icons2/2148/PNG/512/nomad_icon_132150.png' alt=''/>
                    <div className='chatOnlineBadge'></div>
                </div>
                <span className='chatOnlineName'>john</span>
            </div>
            
        </div>
    )
}

export default Online
