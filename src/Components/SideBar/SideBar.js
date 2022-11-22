import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function SideBar({ currentUser, signOut }) {
  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [friendList, setFriendList] = useState([]);
  return <div>SideBar</div>;
}

export default SideBar;
