import React from "react";

const UserStatus = (props) => {
  // if(props.loggedIn && props.isAdmin){
  //     return <h1>Welcome Admin!</h1>
  // } else if(props.loggedIn){
  //     return <h1>Welcome User!</h1>
  // } else{
  //     return <h1>Login Failed</h1>
  // }
  return (
    <div>
      <div>
        {props.loggedIn && props.isAdmin && <h1>Welcome Admin!</h1>}
        {props.loggedIn && props.isAdmin === false && <h1>Welcome User!</h1>}
        {props.loggedIn===false && props.isAdmin === false && <h1>Login Failed</h1>}
      </div>
    </div>
  );
};

export default UserStatus;
