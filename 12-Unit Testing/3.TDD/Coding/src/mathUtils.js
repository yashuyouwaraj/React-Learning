// Step 3: Write the Code
// Now, we write the minimal code to make the test pass. We will define the add function

export const add = (a, b) =>{
    if(typeof a!=="number" || typeof b!=="number"){
        throw new Error("Both arguments must be numbers")
    }
    return a+b;
}

// Step 4: Run the Test Again
// Now, we run the test again. This time, the test should pass because the add function is correctly defined.

// Step 5: Refactor the Code ✅
// At this point, the code is simple, but if we had a more complex function, we could refactor it to improve readability or performance. If we refactor, we re-run the test to make sure the functionality is still correct.

// In this case, the function is already simple, so there's no immediate need to refactor. But let's imagine we wanted to refactor the code to handle cases where the inputs are not numbers.

// For example, let’s add a check to ensure both arguments are numbers.