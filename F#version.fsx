// SIMPLE SUMMATION: This function will be responsible for summing all numbers within a string, 
//between  0 and 2 elements.

//this function will return an integer
let intAdd (str) : int =
    // Evaluate if str is an empty string
    if str = "" then 
        0 
    else 
        // Splits the string 'str' into a list of substrings using the comma as the delimiter.
        let array = str.Split(",")

         //Evaluate if newArray contains one or two elements and then make the sum
        if array.Length = 1 then
            let result = (int array.[0])
            result
        else if array.Length = 2 then
            let result = (int array.[0]) + (int array.[1])
            result
        else 
            printfn "%s" "invalid input"
            0 

// Tests
printfn "Test 1: %d" (intAdd "")
printfn "Test 2: %d" (intAdd "1,3")
printfn "Test 3: %d" (intAdd "1,2")
printfn "Test 3: %d" (intAdd "30,55")

// Technical Justification of the Solution

// I decided to emphasize simplicity because the function will only
// receive 0, one, or two elements. It's not worth using functions or loops 
// for just one sum.