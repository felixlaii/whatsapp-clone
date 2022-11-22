import { DoorBack } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function SideBar({ currentUser, signOut }) {
  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
      const getAllUsers = async () => {
          const data = await db.collection("users").onSnapshot((snapshot) => {
              setAllUsers(
                  snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
              )
          })
      }
  })

  return <div>SideBar</div>;
}

export default SideBar;
