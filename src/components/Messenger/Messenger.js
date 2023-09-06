import { CircularProgress, Paper } from "@mui/material";
import "./Messenger.css";
import * as api from "../../api";
import React, { useEffect, useRef, useState } from "react";
import Conversation from "../conversation/Conversation";
import Message from "./Message/Message";
import Online from "./online/Online";

function Messenger() {
  const [userChats, setUserChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const scrollRef = useRef()

  console.log(user?.result._id);
  const getUserChat = async (id) => {
    try {
      return await api.fetchUserChat(id);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserMessages = async (id) => {
    try {
      const res = await api.fetchUserMessage(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
///// getting userchat effect
  useEffect(() => {
    getUserChat(user?.result._id)
      .then((chat) => {
        // console.log(chat.data);
        setUserChats(chat.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
//   console.log(`current:${currentChat?._id}`);

///////// getting user messages effect
  useEffect(() => {
    getUserMessages(currentChat?._id)
      .then((m) => {
        // console.log(m.data);
        setMessages(m.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentChat]);
//   console.log(`messages:${messages}`);

//////// useRef effect
useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
},[messages])

const handleSubmit= async(e)=>{
    e.preventDefault()
    const message = {
        senderId:user?.result._id,
        text:newMessage,
        chatId:currentChat?._id
    }
    try {
       const res = await api.createUserMessage(message) 
       setMessages([...messages,res.data])
       setNewMessage("")
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxHeight: "450px",
        backgroundColor: "white",
        fontFamily: "monospace",
      }}
    >
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <h3 className="chatMenuInput">Chat</h3>
          {userChats.map((chat, index) => {
            return (
              <div onClick={() => setCurrentChat(chat)} key={index}>
                <Conversation chat={chat} currentUser={user?.result} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages?.map((m) => (
                    <div ref={scrollRef}>
                  <Message message={m} self={m.senderId === user?.result._id} />
                    </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
              </div>
            </>
          ) : (
            <>
              <span className="noChat">Click on any chat</span>
              <CircularProgress />
            </>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <Online />
        </div>
      </div>
    </div>
  );
}

export default Messenger;

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
