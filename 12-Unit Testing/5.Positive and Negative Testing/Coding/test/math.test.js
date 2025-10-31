import {describe,it,expect} from "vitest"
import { add } from "../src/math"

describe("Math",()=>{
    it("should add valid numbers",()=>{
        expect(add(1,5)).toBe(6)
        expect(add(10,50)).toBe(60)
        expect(add(0,0)).toBe(0)
    })

    it("should add invalid inputs",()=>{
        // Invalid inputs, should throw an error
        expect(()=>{add(3,"5")}).toThrowError("Both inputs must be numbers")
        expect(()=>{add("a",2)}).toThrowError("Both inputs must be numbers")
        expect(()=>{add(undefined,null)}).toThrowError("Both inputs must be numbers")
    })
})