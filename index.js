// CUSTOM DELIMITERS: This function will handle custom delimiters
// defined in a specific format, which will be evaluated at the beginning
// while still supporting the default delimiters (commas and newlines).


function intAdd (str){

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }

    //Declare the custom variable
    let custom= "";

    // Evaluate whether the string contains the required format for custom delimiters without using regular expressions.
    if(str[0] === "/" && str[1] === "/" && str[3] === "\n"){
        custom= str[2];
    }
    
    //variable for the result
    let result= 0;

    // Temporary container for data
    let temporaryContainer="";
    
   // Iterates to select the characters that are numbers and compute the sum
    for(let i=0; i < str.length; i++){

       // Check if the character is not a newline, a comma, the custom delimiter, or a forward slash ("/"); if it passes the filters, it will be treated as part of a number.
        if(str[i] !== '\n' && str[i] !== ',' && str[i] !== custom && str[i] !== "/"){
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
console.log(intAdd("//;\n1;3;2.5;3")) // Handling cases with decimal numbers
console.log(intAdd("//*\n1*2"))
console.log(intAdd("//?\n1?20"))



// Technical justification of the solution

// In this addition of new functionality to the intAdd function, I continued with the approach of simple procedures to ensure 
// the function remains fast and efficient. At the beginning, I used an if statement to check whether the input complies with 
// the custom delimiter format. During the for loop, I added an evaluation for the "/" character and the content of the custom 
// variable. If no custom delimiter is defined, the evaluation remains unchanged and continues to fulfill the previous 
// functionalities. At one point, I considered using isNaN, but I decided against it because when handling a decimal number, 
// the period (.) would be excluded as part of the number. For this reason, I am currently maintaining this method to 
// distinguish between numbers and delimiters or parts of a format.


