
import { FC } from 'react';
import './App.css';
import Counter, { TestComp } from "./counter";
import { User } from "./types";
import UserInfo from './userInfo'


const App:FC=()=> {
  const user: User = { firstName: "chamara", lastName: "sanjeewa" };
 return(
    <div className="App">
      <Counter firstName={user.firstName} lastName={user.lastName}></Counter>
      <TestComp firstName={user.firstName} lastName={user.lastName}></TestComp>
      <UserInfo></UserInfo>
    </div>)
  
}

export default App;
