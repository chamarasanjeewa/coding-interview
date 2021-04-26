import { stringify } from "node:querystring";
import React, { Component, createContext, useContext, useState } from "react";
import { GlobalContent } from "../types";

export const CounterContext = createContext<GlobalContent>({
  copy: "hellow",
  setCopy: () => {}
});
export const CounterContextProvider: React.FC = props => {
  const [copy, setCopy] = useState<string>("copy");
  const [paste, setPaste] = useState<string>("paste");

  return (
    <CounterContext.Provider value={{ copy, setCopy, paste, setPaste }}>
      {props.children}
    </CounterContext.Provider>
  );
};
