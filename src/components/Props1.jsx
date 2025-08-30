import React from 'react'

const Props1 = ()=>{
    return (
        <User
        img="https://media.tenor.com/-ufrqpl5cp0AAAAM/test.gif" 
        name="Yashu Youwaraj"
        age={22}
        isMarried={false}
        hobbies={["Coding","Reading","Sleeping"]}
        />
    );
};

const User = ({img,name,age,isMarried,hobbies}) => {
  return (
    <div>
        <h1>Props Using</h1>
        <img src={img} alt="Dancing Cat" width={100}/>
        <p>Name: {name}</p>
        <p>age: {age}</p>
        <p>isMarried: {isMarried}</p>
        <p>Hobbies: {hobbies}</p>
    </div>
  )
}

export default Props1