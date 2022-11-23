import React from "react";
import Chatcontainer from "../ChatContainer/ChatContainer";
import Sidebar from "../SideBar/SideBar";
import "./chatPage.scss";

function ChatPage({ currentUser, signOut }) {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        {/* sidebar */}
        <Sidebar currentUser={currentUser} signOut={signOut} />
        {/* chatcontainer */}
        <Chatcontainer currentUser={currentUser} />
      </div>
    </div>
  );
}

export default ChatPage;
