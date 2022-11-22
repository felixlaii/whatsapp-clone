import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import db from "../../firebase";

function SideBar({ currentUser, signOut }) {
  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        setAllUsers(
          snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
        );
      });
    };
  });

  const getFriends = async () => {
    const data = await db
      .collection("Friendlist")
      .doc(currentUser.email)
      .collection("list")
      .onSnapshot((snapshot) => {
        setFriendList(snapshot.docs);
      });
  };

  return <div>SideBar</div>;
}

export default SideBar;
