// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Jest template
// describe("functionName", () => {
//     it("describe what functionName does here", () => {
//     expect(functionName(pass arg as needed)).toEqual(expected output)
//     })
// })


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("reOrder", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(reOrder(colors1)).not.toEqual(expect.reOrderContaining)
    expect(reOrder(colors2)).not.toEqual(expect.reOrderContaining)
    })
})

    // ReferenceError: reOrder is not defined

// b) Create the function that makes the test pass.
    // input: array 
    // output: removed first item in array and shuffled the rest of array 

    // create a function called reOrder that takes in an array as the parameter
        // using the .shift() method to remove the first index of the array 
    // use a for loop to iterate over the array
        // let index start at array length and end at the index greater than 0 because we are already extracting index 0 before shuffling the array
        // set r to Math.floor Math.random to randomize the indexes
            // return the shuffled array


const reOrder = (arr) => {
    // arr.shift()
    for (let i = arr.length; i > 0; i++) {
    let r = Math.floor(Math.random())
        return [arr[i], arr[r]] = [arr[r], arr[i]]
  }
}
    // I had an issue with using .shift() before my for loop and it was hard to incorporate it in the loop
    // Got stuck and have no idea where to go from here.
    

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
        // the test passed but logically, I don't think this is correct.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

    describe("newVotes", () => {
        it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect(newVotes(votes1)).toEqual(11)
        expect(newVotes(votes2)).toEqual(-31)
        })
    })

    //  ReferenceError: newVotes is not defined


// b) Create the function that makes the test pass.
    // input: objects 
    // output: number that the object is tallied together

    // create a function called newVotes that passes objects as a parameter
        // use object.value to access the enumerables in an object (passing through the object)
        // use the .reduce method to reduce the array to a single value.
            // execute the function for each value from left to right((a,b) => a - b)
    // returns the value of the function

const newVotes =  (obj) => {
    return Object.values(obj).reduce((a,b) => a - b)
}

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string","undefined"]
    expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    // I had a rough time trying to write the expected output because the 2 arrays were going to be merged into 1 array. It took a lot of fail jests but it worked out in the end. 
    })
})

    //  ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
    // input : array 
    // outcome = concat array with no duplicates

    // create a function called no duplicates with no parameters
        // in the function, create a new variable called dataArray3 
            // use the method (... new Set) to remove any duplicates in an array
            // inside the method, use the spread operator to copy the original dataArray1 and dataArray2 
                // using the spread operator does not change the original array
        // return the new variable dataArray3 with the expected outcome of no duplicates in new array

const noDuplicates = () => {
    const dataArray3 = [...new Set([...dataArray1, ...dataArray2])]
    return dataArray3
}

    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total



    
