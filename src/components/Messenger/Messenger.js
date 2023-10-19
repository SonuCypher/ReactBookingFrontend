import { CircularProgress } from "@mui/material";
import "./Messenger.css";
import * as api from "../../api";
import React, { useEffect, useRef, useState } from "react";
import Conversation from "../conversation/Conversation";
import Message from "./Message/Message";
import Online from "./online/Online";
import {io} from "socket.io-client"
import { useSelector } from "react-redux";

function Messenger() {
  const [userChats, setUserChats] = useState([]);
  const [chatMenuInput, setChatMenuInput] = useState("Your Chats");
  const [userFriends, setUserFriends] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socket = useRef()

  const [user,setUser]=useState(JSON.parse(localStorage.getItem("profile")));
  const auth = useSelector((state)=> state.auth.authData)
  const scrollRef = useRef()


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

  const getUserFriends = async(id)=>{
    try {
      return await api.getUserFriends(id)
    } catch (error) {
      console.error(error);
    }
  }

  const createUserChat = async(firstId,secondId)=>{
    try {
      return await api.createUserChat({firstId,secondId})
    } catch (error) {
      console.error(error);
    }
  }



///////////SOCKET///////////////////////////


useEffect(()=>{
    socket.current = io("http://localhost:3001")
    socket.current.on("getMessage", data =>{
        setArrivalMessage({
            sender: data.senderId,
            text:data.text,
            createdAt: Date.now(),
        })
    })
},[])

useEffect(()=>{
    arrivalMessage && 
    currentChat?.members.includes(arrivalMessage?.sender)&&
    setMessages((prev)=>[...prev,arrivalMessage])
},[arrivalMessage,currentChat])

useEffect(()=>{
    socket.current.emit("addUser", user.result._id)
    console.log("userid:", user.result._id)
    socket.current.on("getUsers", users=>{
        console.log("online",users)
    })
},[user])


////////////SOCKET////////////////////



///// getting userchat effect
  useEffect(() => {
    getUserChat(user?.result._id)
      .then((chat) => {
        console.log("userChats",chat.data);
        setUserChats(chat.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    getUserFriends(user?.result._id)
      .then((friend) => {
        console.log("userfriends",friend.data);
        setUserFriends(friend.data);
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
         console.log(m.data);
        setMessages(m.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log('messages', messages);
  }, [currentChat]);

//////// useRef effect
useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
},[messages])


/////
const handleSubmit = async(e)=>{
    e.preventDefault()
    const message = {
        senderId:user?.result._id,
        text:newMessage,
        chatId:currentChat?._id
    }

    const recieverId = currentChat?.members.find(member => member !== user?.result._id)
      socket.current.emit("sendMessage",{
          senderId:user.result._id,
          recieverId,
          text:newMessage,
      })

    try {
       const res = await api.createUserMessage(message) 
       setMessages([...messages,res.data])
       setNewMessage("")
    } catch (error) {
        console.log(error)
    }
}
////////

  return (
    <div
style={{
  display: "flex",
  width: "100%",
  maxHeight: "450px",
  backgroundColor: "white",
  fontFamily: "monospace",
  // border: "1px solid white",
  // overflow:"scroll"
}}
>
<div className="chatMenu">
  <div className="chatMenuWrapper">
    <div className="chatMenuInput">{chatMenuInput}</div>
    {userFriends.map((friend, index) => {
      return (
        <div onClick={()=>{
          createUserChat(user?.result._id, friend._id)
          .then((chat) => {
            console.log("userChats",chat.data);
            setCurrentChat(chat.data);
          })
          .catch((error) => {
            console.log(error);
          })
          setChatMenuInput(friend.name)
        }} key={index}>
          <Conversation friend={friend} />
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
          {messages?.map((m,i) => (
              <div ref={scrollRef} key={i}>
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
      <div className="noChatWrap">
        <span className="noChat">Click on any chat</span>
        {/* <CircularProgress sx={{position:"absolute",top:"20%",left:"45%"}} /> */}
      </div>
    )}
  </div>
</div>
</div>
  );
}

export default Messenger;




{/* <div
style={{
  display: "flex",
  width: "100%",
  maxHeight: "450px",
  backgroundColor: "white",
  fontFamily: "monospace",
  border: "1px solid white"
}}
>
<div className="chatMenu">
  <div className="chatMenuWrapper">
    <div className="chatMenuInput">Your Chat</div>
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
          {messages?.map((m,i) => (
              <div ref={scrollRef} key={i}>
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
  <div className="chatMenuInput">Your Chat</div>
    <Online />
  </div>
</div>
</div> */}


// {userChats.map((chat, index) => {
//   return (
//     <div onClick={() => setCurrentChat(chat)} key={index}>
//       <Conversation chat={chat} currentUser={user?.result} />
//     </div>
//   );
// })}

