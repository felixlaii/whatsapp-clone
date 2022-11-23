import React, { useEffect, useRef, useState } from "react";
import "./Chatcontainer.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import "./Chatcontainer.css";
import ChatMessage from "./ChatMessage";
import Picker from "emoji-picker-react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import firebase from "firebase";

import React from "react";

function ChatContainer({ currentUser }) {
  const [message, setMessage] = useState("");
  const [openEmojiBox, setOpenEmojiBox] = useState(false);
  const { emailID } = useParams();
  const [chatUser, setChatUser] = useState({});
  const chatBox = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
      const getUser = async () => {
          const data = await db
          .collection("users")
          .doc(emailID)
          .onSnapshot((snapsnap) => {
              setChatUser(snapshot.data());
          })
      }

      const getMessages = async () => {
          const data = await db
          .collection("chats")
          .doc(emailID)
          .collection("messages")
          .orderBy("timeStamp", "asc")
          .onSnapshot((snapshot) => {
              let messages = snapshot.docs.map((doc) => doc.data());

              let newMessage = messages.filter(
                  (message) => 
                  message.senderEmail === (currentUser.email || emailID) ||
                  message.receiverEmail === (currentUser.email || emailID)
              );

              setChatMessages(newMessage);
          })
      }
      getUser();
      getMessages();
  }, [emailID])
  return <div>ChatContainer</div>;

  
}

export default ChatContainer;
