import {describe,it,expect} from "vitest"
import { factorial, fibonacci, gcd } from "../src/mathUtils"

describe("Math Utils",()=>{
    it("should give factorial of a number",()=>{
        expect(factorial(3)).toBe(6)
        expect(factorial(4)).toBe(24)
    })
    it("should throw an error when a negative number is passed.",()=>{
        expect(() => factorial(-5)).toThrow("a negative number is passed.");
    })

    it("should give gcd of 2 numbers",()=>{
        expect(gcd(40,30)).toBe(10)
        expect(gcd(15,30)).toBe(15)
    })

    it("should give fibonacci series of a number",()=>{
        expect(fibonacci(3)).toEqual([0,1,1])
        expect(fibonacci(5)).toEqual([0,1,1,2,3])
    })
    it("should give an error when a negative number is passed.",()=>{
        expect(()=>fibonacci(-2)).toThrow("number must be non-negative")
    })
})