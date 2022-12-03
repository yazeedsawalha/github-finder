import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubPorivder = ({ children }) => {
  const intiState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, intiState);

  const fetchUser = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {},
    });
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  // Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
