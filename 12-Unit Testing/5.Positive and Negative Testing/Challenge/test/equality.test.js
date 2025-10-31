import {it,expect} from "vitest"

it("toBe Matcher",()=>{
    const result=5
    expect(result).toBe(5)
})

it("toEqual Matcher",()=>{
    const obj1={name:"Yashu",age:30}
    const obj2={name:"Yashu",age:30}
    expect(obj1).toEqual(obj2)
})

it("toStrictEqual Matcher",()=>{
    const obj1={name:"Yashu",age:30}
    const obj2={name:"Yashu",age:30}
    expect(obj1).toStrictEqual(obj2)
})