import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Snipper from "../layouts/Snipper";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {},
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:gird-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return  <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Snipper />;
  }
}

export default UserResults;
