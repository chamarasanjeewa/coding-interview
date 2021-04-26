import React, { useContext } from "react";
import { CounterContext } from "./context/counter-context";
import { GlobalContent } from "./types";

export default function CounterButtons() {
  const { copy, setCopy, paste, setPaste } = useContext<GlobalContent>(
    CounterContext
  );

  const increment = () => {
    setCopy("chamara");
  };

  const decrement = () => {
    setCopy("chamara");
  };

  const funcPaste = () => {
    setPaste?.("paste");
  };

  return (
    <div>
      <button color="green" onClick={increment}>
        Add
      </button>
      <button color="red" onClick={decrement}>
        Minus
      </button>
    </div>
  );
}

//create context
//create provider(inject context)
//inject provider
//useContext
