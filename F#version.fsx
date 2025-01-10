// IGNORING GIANTS: This function will maintain the previous functionalities, with the particularity 
// that it will perform an additional evaluation and ignore numbers greater than 1000.


(* Technical Justification of the Solution

Thanks to the structure of my function, it was only necessary to modify one line so that, before 
performing the sum, it filters out the numbers greater than 1000.

*)
//Performs the extraction of numbers when the custom delimiters pattern exists.
let evaluateWithCustomDelimiter (str: string) =

    let customDelimiter= str.[2] //retrieve the delimiter.
    let positionN= str.IndexOf('\n') //get the position where the numbers start.
    let substring= str.Substring(positionN + 1) //trim the string.
    let array= substring.Split customDelimiter //split the numbers using the delimiter.

    array //return the array

//this function will return an integer
let intAdd (str) =

    // Evaluate if str is an empty string
    if str = "" then 
        0 
    else 
        //set up a mutable empty array for all numbers.
        let mutable numbers= [||]

        //set up a mutable empty array for all negative numbers.
        let mutable negatives= [||]
         
         //check if the positions match the characters that form the pattern for custom delimiters.      
        if str.[0] = '/' && str.[1] = '/' && str.[3] = '\n' then

            //store the result of the function.
            let result= evaluateWithCustomDelimiter str

            //Filter all the negative numbers and store them in the negatives variable.
            negatives <- Array.filter (fun x -> int x < 0) result

            // Convert each element of the array into a number.
            numbers <- Array.map int result
            
        else
            // Create the delimiters
            let delimiters= [|','; '\n'|]

            // Splits the string 'str' into an array of substrings using the comma and newline characters as delimiters.
            let array= str.Split delimiters
            
            //Filter all the negative numbers and store them in the negatives variable.
            negatives <- Array.filter (fun x -> int x < 0) array
            
            // Convert each element of the array into a number.
            numbers <- Array.map int array


         //Discard the numbers greater than 1000 and then perform the sum.
        let sum= numbers |> Array.filter( fun x -> x <= 1000) |> Array.sum

        // //Return the result.
        if negatives.Length > 0 then failwithf "Negatives not allowed: %A" negatives else sum
        

// Tests
printfn "Test 1: %d" (intAdd "")
printfn "Test 2: %d" (intAdd "30,30, 40, 50, 100, 25, 10")
printfn "Test 3: %d" (intAdd "5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300")
printfn "Test 4: %d" (intAdd "30,55")
printfn "Test 5: %d" (intAdd "15")
printfn "Test 6: %d" (intAdd "15\n25,35\n45,55\n65,75,85\n95,105,115\n125,135,145,155,165,175,185,195,205\n215,225,235")
printfn "Test 7: %d" (intAdd "//;\n1;2")
printfn "Test 8: %d" (intAdd "1\n2,3")
printfn "Test 9: %d" (intAdd "//?\n1?20?20")
printfn "Test 10: %d" (intAdd "1,-2,-3")
printfn "Test 11: %d" (intAdd "//*\n-1*2")
printfn "Test 12: %d" (intAdd "2,3,1001")
printfn "Test 13: %d" (intAdd "2500,3,1001")
printfn "Test 14: %d" (intAdd "1000,5,10")




