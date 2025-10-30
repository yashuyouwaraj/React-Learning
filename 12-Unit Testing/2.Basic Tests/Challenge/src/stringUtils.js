export const reverseString=(str)=> {
    return str.split("").reverse().join("")
}

export const capitalizeWords=(str)=> {
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
}

export function isPalindrome(str) {
  // Step 1: Clean the input string
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  // Step 3: Compare and return the result
  return cleanStr === reversedStr;
}