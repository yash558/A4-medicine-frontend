import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const StateContext = ({ children }) => {
const [currentPlan, setCurrentPlan] = useState();
const [results, setResults] = useState([]);
const [savedResult, setSavedResult] = useState([]);
const [dis, setDis] = useState(true);
const [show ,setShow] = useState(false);
const [name, setName] = useState("");

  return (
    <Context.Provider
      value={{currentPlan ,setCurrentPlan, results, setResults, savedResult, setSavedResult, dis, setDis, show, setShow, name, setName}}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);

export default StateContext;
