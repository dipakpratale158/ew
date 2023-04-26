import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, settoken] = useState(initialToken);

  const userIsLoggedIn = !!token; //if token is empty string then it return false else return true

  //making functions for updating each state

  const loginHandler = (token) => {
    settoken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    settoken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
