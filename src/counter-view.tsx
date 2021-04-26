import * as React from "react";
import { Component } from "react";
import CounterButtons from "./counter-buttons";
import CounterDisplay from "./counter-display";
import { CounterContextProvider } from "./context/counter-context";

export const DisplayCounter = () => {
  return (
    <CounterContextProvider>
      <CounterDisplay />
      <CounterButtons />
    </CounterContextProvider>
  );
};
//export { DisplayCounter };

//create context provider
//wrap components with context provider
//inside component useContext to use the values
