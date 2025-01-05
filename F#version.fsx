// BREAKING NEWLINES: This function is responsible for summing all numbers in a string, 
// supporting newline characters (\n) as delimiters along with commas.

//this function will return an integer
let intAdd (str) : int =

    // Evaluate if str is an empty string
    if str = "" then 
        0 
    else 
        //Create the delimiters
        let delimiters= [|','; '\n'|]

        // Splits the string 'str' into an array of substrings using the comma and newline characters as delimiters.
        let array= str.Split delimiters

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
printfn "Test 6: %d" (intAdd "1\n2,3")
printfn "Test 7: %d" (intAdd "15\n25,35\n45,55\n65,75,85\n95,105,115\n125,135,145,155,165,175,185,195,205\n215,225,235")

// Technical Justification of the Solution

// In this third task of the challenge, I made a slight modification by adding the newline character as part of the delimiters. 
// Unlike JavaScript (an optional language I used to solve the challenge), Split in F# allows me to use multiple delimiters, saving 
// me from the task of creating a loop to evaluate it manually.