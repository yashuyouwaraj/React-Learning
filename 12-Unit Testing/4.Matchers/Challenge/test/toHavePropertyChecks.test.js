import {it,expect} from "vitest"

it("Challenge 4: toHaveProperty matcher (Property Check)",()=>{
    const user= {username:"John Doe",email:"johndoe@gmail.com",age:25}

    expect(user).toHaveProperty("username")
    expect(user).toHaveProperty("email","johndoe@gmail.com")
    expect(user).toHaveProperty("password")
})