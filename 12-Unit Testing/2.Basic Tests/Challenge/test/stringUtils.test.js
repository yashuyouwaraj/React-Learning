import { describe,it,expect } from "vitest";
import { capitalizeWords, isPalindrome, reverseString } from "../src/stringUtils";

describe("String Utils",()=>{
    it("should reverse the string",()=>{
        expect(reverseString("hello")).toBe("olleh")
        expect(reverseString("YASHU")).toBe("UHSAY")
    })

    it("should capitalize the words",()=>{
        expect(capitalizeWords("world")).toBe("World")
        expect(capitalizeWords("wOrLd")).toBe("World")
    })

    it("should give a string is palindrome or not",()=>{
        expect(isPalindrome("hello")).toBe(false)
        expect(isPalindrome("AmmA")).toBe(true)
    })
})