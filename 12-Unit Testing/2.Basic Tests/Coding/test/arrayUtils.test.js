import {describe,it,expect} from "vitest"
import { filterEven, findMax, findMin, sum } from "../src/arrayUtils"

describe("Array Utils",()=>{
    it("should return correct sum of array",()=>{
        expect(sum([1,2,3,4])).toEqual(10)
        expect(sum([1,2,3])).toEqual(6)
    })
    it("should return maximum in the array",()=>{
        expect(findMax([1,2,3,4,6])).toBe(6)
        expect(findMax([10,2,-3,4,6])).toBe(10)
    })
    it("should return minimum in the array",()=>{
        expect(findMin([1,2,-4,10,-2,12])).toBe(-4)
        expect(findMin([1,2,-4,-10,-2,-12])).toBe(-12)
    })
    it("should return even numbers of array",()=>{
        expect(filterEven([1,2,4,6,7,8,9])).toEqual([2,4,6,8])
        expect(filterEven([1,2,4,60])).toEqual([2,4,60])
    })
})