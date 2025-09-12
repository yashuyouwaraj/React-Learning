import React, { useContext } from "react";
import { Data,Data1 } from "../App";

const ComponentH = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h1>
        My name is {userName} and I'm {age} years old
      </h1>
    </div>
  );
};

export default ComponentH;
