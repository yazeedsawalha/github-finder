import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubPorivder = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([true]);

  const fetchUser = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {},
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
