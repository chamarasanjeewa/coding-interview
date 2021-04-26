import { count } from "node:console";
import * as React from "react";
import { CounterContext } from "./context/counter-context";
const { useContext } = React;
import { GlobalContent } from "./types";
const CounterDisplay = () => {
  const {copy ,setCopy}= useContext<GlobalContent>(CounterContext);
  return (
    <div>
      <span>{copy}</span>
      <span>Counter</span>
    </div>
  );
};

const abc = () => {
  return <div></div>;
};
export { abc };
export default CounterDisplay;
