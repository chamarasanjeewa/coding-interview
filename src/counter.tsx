
import { isPropertySignature } from "typescript";
import * as React from "react";
const {useState}=React;

interface User {
  firstName: string;
  lastName: string;
  fullName?:string;
}

const Counter = (user: User) => {
  const [counter, setCounter] = useState(0);
  //const {fullName:{firstName,lastName}}=props;
  return (
    <div>
      <span>
        {user.firstName} {user.firstName}
      </span>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export class TestComp extends React.Component<User> {
  render() {
    return <div>{this.props.firstName}</div>;
  }
}


export default Counter;
