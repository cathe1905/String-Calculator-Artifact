// BREAKING NEWLINES: This function is responsible for summing all numbers in a string, 
// supporting newline characters (\n) as delimiters along with commas.

function intAdd (str){

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }
    
    //variable for the result
    let result= 0;
    // Temporary container for data
    let temporaryContainer="";

   // Iterates to select the characters that are numbers and compute the sum
    for(let i=0; i < str.length; i++){

       // Evaluate if the character is not a newline or a comma, meaning it is a number
        if(str[i] !== '\n' && str[i] !== ','){
            // Temporarily save the number in a container
            temporaryContainer+= str[i];
        }else{
            // If it's not a number, it means it's a delimiter. Close the current number and add it to the result.
            result+= Number(temporaryContainer);
            // Clear the temporary container
            temporaryContainer= ""
            
        }
        
    }
    // If the last character was a number, it means the container still holds one number. 
    // Add it to the result; otherwise, return the result.
    return temporaryContainer.length > 0 ? result += Number(temporaryContainer) : result;

}

// Tests
console.log(intAdd(""))
console.log(intAdd("1"))
console.log(intAdd("1,2"))
console.log(intAdd("30,30\n40,50\n100,25\n10,"));
console.log(intAdd("17, 3, 20"))
console.log(intAdd("5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300"));
console.log(intAdd("15\n25,35\n45,55\n65,75,85\n95,105,115\n125,135,145,155,165,175,185,195,205,215,225,235\n,"));



// Technical justification of the solution
// I made a modification to the previous function by replacing the 'split' method,
// as it's not possible to separate using two delimiters with 'split'. I preferred
// to iterate directly over the string and ensure that only numbers are taken for the sum.
// This approach allows me to process large amounts of numbers more efficiently,
// avoiding the use of regular expressions at the same time.


