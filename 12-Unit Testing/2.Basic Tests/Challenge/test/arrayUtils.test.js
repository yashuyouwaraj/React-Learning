import { describe,it,expect } from "vitest";
import { flattenArray, intersectArrays, removeDuplicates } from "../src/arrayutils";

describe("Array Utils",()=>{
    it("should return flatten array",()=>{
        expect(flattenArray([1,[2,3],[4,[5,6]]])).toEqual([1,2,3,4,5,6])
    })

    it("should find intersection of arrays",()=>{
        expect(intersectArrays([1,2,3,4],[3,4,5,6])).toEqual([3,4])
    })

    it("should remove duplicates from array",()=>{
        expect(removeDuplicates([1,2,3,3,4,4,5,6,7,6])).toEqual([1,2,3,4,5,6,7])
    })
})