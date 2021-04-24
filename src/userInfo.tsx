import * as React from "react";
const { useEffect, useState } = React;

interface UserInfo {
  gender: string;
  email: string;
  name: UserName;
  picture: Picture;
}

interface UserName {
  first: string;
  last: string;
  title: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

const UserInfo = () => {
  const [user, setUser] = useState<UserInfo>();

  useEffect(() => {
    const getUser = async () => {
      let results = await fetch("https://randomuser.me/api");
      const res = await results.json();
      const result = res.results;
      console.log(result);
      // //@ts-ignore
      // const mappedUser = result.map(x => {
      //   const mappingUser: UserInfo = {
      //     name: x.name,
      //     gender: x.gender,
      //     email: x.email,
      //     picture: x.picture
      //   };
      //   //console.log(mappingUser);
      //   return mappingUser;
      // });

      setUser(result?.[0]);
      console.log(result);
    };
    getUser();
  }, []);

  return (
    <>
      <div key={1}>
        <span>{user?.gender}</span>
        <span>{user?.name?.first}</span>
        <img src={user?.picture?.thumbnail}></img>
      </div>
      {/* {user.map((x, index) => (
        <>
          <div key={index}>
            <span>{x.gender}</span>
            <span>{x.name?.first}</span>
            <img src={x.picture.thumbnail}></img>
          </div>
        </>
      ))} */}
    </>
  );
};
export default UserInfo;

//few problems
//after fetch api how to map data to the object with types
//how to map nested objects
//
