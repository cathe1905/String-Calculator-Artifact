// INFINITIVE ARITHMETIC: This function will be responsible for summing all numbers within a string, and support 
//an unknown number of inputs.

//this function will return an integer
let intAdd (str) : int =

    // Evaluate if str is an empty string
    if str = "" then 
        0 
    else 
        // Splits the string 'str' into an array of substrings using the comma as the delimiter.
        let array = str.Split(",")

        // Convert each element of the array into a number.
        let num= Array.map int array

        //Use the sum function to add all the integers.
        let sum= Array.sum num

        //Return the result.
        sum
        
       
// Tests
printfn "Test 1: %d" (intAdd "")
printfn "Test 2: %d" (intAdd "30,30, 40, 50, 100, 25, 10")
printfn "Test 3: %d" (intAdd "5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300")
printfn "Test 4: %d" (intAdd "30,55")
printfn "Test 5: %d" (intAdd "15")

// Technical Justification of the Solution

// In this second task, I kept the approach simple by using built-in language functions, maintained the split, 
// which is always necessary, and performed the subsequent operations with map and sum. This resulted in short, 
// simple, and easy-to-understand code.