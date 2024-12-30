// NEGATIVE REBELION: This function will maintain the previous functionalities, with the particularity 
// that it will perform an additional evaluation, and if there are negative numbers, it will throw 
// an exception.


function intAdd (str){

    //VARIABLES

    let negatives= []; //to save negative numbers
    let custom= ""; //Declare the custom variable
    let temporaryContainer=""; // Temporary container for data
    let result= 0; //variable for the result


    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }
 
    // Evaluate whether the string contains the required format for custom delimiters without using regular expressions.
    if(str[0] === "/" && str[1] === "/" && str[3] === "\n"){
        custom= str[2];
    }
     
   // Iterates to select the characters that are numbers and compute the sum
    for(let i=0; i < str.length; i++){

       // Check if the character is not a newline, a comma, the custom delimiter, or a forward slash ("/"); if it passes the filters, it will be treated as part of a number.
        if(str[i] !== '\n' && str[i] !== ',' && str[i] !== custom && str[i] !== "/"){
            // Temporarily save the number in a container
            temporaryContainer+= str[i];
        }else{
            // If it's not a number, it means it's a delimiter. Close the current number and add it to the result, as long as it's not a negative number
            Number(temporaryContainer) < 0 ? negatives.push(Number(temporaryContainer)) : result+= Number(temporaryContainer)
            // Clear the temporary container
            temporaryContainer= ""
        } 
    }

    // If the last character was a number, it means the container still holds one number.
    result += Number(temporaryContainer) 

    //If the array of negative numbers contains elements, process the last digit in temporaryContainer and throw the exception.
    if(negatives.length > 0 ){
        if(temporaryContainer.length > 0 && Number(temporaryContainer) < 0){
            negatives.push(Number(temporaryContainer))
        }
        console.error("negatives not allowed:" + negatives.join(","))
        return 
    }
    
    return result;

}

// Tests
console.log(intAdd(""))
console.log(intAdd("1"))
console.log(intAdd("1,2"))
console.log(intAdd("30,30\n40,50\n100,25\n10,"));
console.log(intAdd("17, 3, 20"))
console.log(intAdd("5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300"));
console.log(intAdd("15\n25,35\n45,55\n65,75,85\n95,105,115\n125,135,145,155,165,175,185,195,205,215,225,235\n,"));
console.log(intAdd("//;\n1;3;2.5;3")) // Handling cases with decimal numbers
console.log(intAdd("//*\n1*2"))
console.log(intAdd("//?\n1?20"))
console.log(intAdd("1,-2,-3"))
console.log(intAdd("//*\n-1*2")) // Handling cases with custom delimiters and negative numbers together



// Technical justification of the solution

// In this new functionality, I added a simple validation in the same section of the for loop to avoid long code. I kept the evaluation
// within the for loop for cases where a combination might arise, such as an input with a custom delimiter format and negative 
// numbers. This approach allows me to evaluate all possible scenarios where negative numbers appear, while keeping the code short 
// and understandable


