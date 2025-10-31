import {it,expect} from "vitest"

it("toBe Matcher for strings",()=>{
    const result="Hello, World!"
    expect(result).toBe("Hello, World!")
})

it("toContain matcher for strings",()=>{
    const result="Hello, World!"
    expect(result).toContain("Hello")
})

it("toMatch Matcher for regex",()=>{
    const result="Hello, world!"
    expect(result).toMatch(/world/)
})

it("toMatchSnapshot matcher",()=>{
    const result="Hello, world!"
    expect(result).toMatchSnapshot()
})