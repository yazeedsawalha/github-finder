import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import Snipper from "../layouts/Snipper";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading, fetchUser } = useContext(GithubContext);
  useEffect(() => {
    fetchUser();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:gird-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Snipper />;
  }
}

export default UserResults;
