import React, { useState, useRef, useEffect, useContext } from "react";
import useToken from "../custom hooks/useToken";

const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const { token, setToken } = useToken();

  const value = { token, setToken };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppContextProvider");
  }
  return context;
}
export { AppContextProvider, useApp };
