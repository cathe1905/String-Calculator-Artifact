// IGNORING GIANTS: This function will maintain the previous functionalities, with the particularity 
// that it will perform an additional evaluation and ignore numbers greater than 1000.


function intAdd (str){

    //VARIABLES
    let temporaryContainer=""; // Temporary container for data
    const result= []; //container for the result

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }
 
    // Evaluate whether the string contains the required format for custom delimiters without using regular expressions.
    const custom= findCustomDelimiter(str);

   // Iterates to select the characters that are numbers.
    for(let i=0; i < str.length; i++){
        
       // Check if the character is not a newline, a comma, the custom delimiter, or a forward slash ("/"); if it passes the filters, it will be treated as part of a number.
        if(str[i] !== '\n' && str[i] !== ',' && str[i] !== custom && str[i] !== "/"){
            // Temporarily save the number in a container
            temporaryContainer+= str[i];

        // If it's not a number, it means it's a delimiter. Close the current number and add it to the result.
        }else{
            result.push(Number(temporaryContainer))
            // Clear the temporary container
            temporaryContainer= ""  
        }
    }

    //If the last character was a number, it means the container still holds one number.
    result.push(Number(temporaryContainer))

    //Filter out negative numbers and terminate the execution of the code in that case.
    const negatives= result.filter(number=> number < 0)
    if(negatives.length > 0){
        console.error("negatives not allowed:" + negatives.join(","))
        return 
    }

    // Use this function to sum only the numbers less than or equal to 1000
    const finalResult= filterBySize(result)

    //return the sum
    console.log(finalResult) 

}




// Tests
intAdd("");
intAdd("1");
intAdd("1,2");
intAdd("30,30\n40,50\n100,25\n10,");
intAdd("17, 3, 20");
intAdd("5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300");
intAdd("15\n25,35\n45,55\n65,75,85\n95,105,115\n125,135,145,155,165,175,185,195,205,215,225,235\n,");
intAdd("//;\n1;3;2.5;3"); // Handling cases with decimal numbers
intAdd("//*\n1*2");
intAdd("//?\n1?20");
intAdd("1,-2,-3")
intAdd("//*\n-1*2") // Handling cases with custom delimiters and negative numbers together
intAdd("2,3,1001")
intAdd("2500,3,1001")
intAdd("1000,5,10")



// Technical justification of the solution

// I chose to simplify the code a bit because limiting the numbers to be less than or equal to 1000 makes the execution 
// of any sum faster. This gives me the opportunity to use JavaScript methods like filter and reduce, which also helps
// reduce the number of lines of code. Additionally, I separated some responsibilities into helper functions to 
// make the code more readable



//HELPER FUNCTIONS

function findCustomDelimiter(input) {
    if(input[0] === "/" && input[1] === "/" && input[3] === "\n"){
        return input[2];
    }else{
        return ""
 
    }
}

function filterBySize(arr) {
    const finalResult= arr.reduce((acc, item ) => {
        if(item <= 1000){
            return acc + item;
        }
        return acc
    }, 0)
    return finalResult
}
