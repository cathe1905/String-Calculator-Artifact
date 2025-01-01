// FLEXIBLE DELIMITERS: This function will maintain the previous functionalities, 
// with a new feature: custom delimiters will be identified regardless of their length, 
// and the function will use them to correctly separate the numbers.


function intAdd (str){
    
    let allNumbers; //container for the numbers

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }
 
    // Evaluate whether the string contains the required format for custom delimiters without using regular expressions.
    const custom= findCustomDelimiter(str);

    //If custom is empty, it will iterate to extract the numbers without considering a custom delimiter.
    if(custom === ""){
        allNumbers= iterateWithoutCustomDelimiter(str)
    //If custom contains a value, it will iterate to extract the numbers considering a custom delimiter, regardless of its length.
    }else{
        allNumbers= iterateWithCustomDelimiter(str, custom)
    }

    //Filter out negative numbers and terminate the execution of the code in that case.
    const negatives= allNumbers.filter(number=> number < 0)
    if(negatives.length > 0){
        console.error("negatives not allowed:" + negatives.join(","))
        return 
    }

    // Use this function to sum only the numbers less than or equal to 1000
    const finalResult= filterBySize(allNumbers)

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
intAdd( "//***\n1***2***3")
intAdd( "//****\n1****2****3")



// Technical justification of the solution

//In this task, I continued assigning specific tasks to helper functions since new functionalities 
// are still being added to my code. This approach makes it simple to understand and easy to scale. 
// I ensured that the code took different paths depending on the value of custom, avoiding double 
// iterations, which makes the code more elegant.



//HELPER FUNCTIONS

function findCustomDelimiter(input) {

    //check if the delimiter pattern exists
    if(input[0] === "/" && input[1] === "/" && input.includes('\n')){
        //look for the position of the newline.
        const position= input.indexOf('\n');
        //use the position to determine where the cut should end to identify the delimiter.
        const delimiter= input.slice(2, position)

        return delimiter

    }else{
        //If the custom delimiter pattern is not found, it returns ""
        return ""
    }
}

function filterBySize(arr) {
    //use the reduce method to sum the numbers in an array, ignoring numbers greater than 1000.
    const finalResult= arr.reduce((acc, item ) => {
        if(item <= 1000){
            return acc + item;
        }
        return acc
    }, 0)
    return finalResult
}

function iterateWithCustomDelimiter(input, delimiter){
    //Find the position where the numbers start.
    const init= input.indexOf('\n') + 1;
    //Trim the string, excluding the delimiter pattern.
    const divided= input.slice(init)
    //Split the string using the delimiter.
    const delimited= divided.split(delimiter);
    const array= []
    
    //Convert the elements into numbers.
    delimited.forEach(elem => {
        array.push(Number(elem))
    });

   return array
}

function iterateWithoutCustomDelimiter (input){

    let temporaryContainer=""; // Temporary container for data
    const result= []
    // Iterates to select the characters that are numbers.
    for(let i=0; i < input.length; i++){
        
        // Check if the character is not a newline, a comma, the custom delimiter, or a forward slash ("/"); if it passes the filters, 
        // it will be treated as part of a number.
        if(input[i] !== '\n' && input[i] !== ','  && input[i] !== "/"){
            // Temporarily save the number in a container
            temporaryContainer+= input[i];

        // If it's not a number, it means it's a delimiter. Close the current number and add it to the result.
        }else{
            result.push(Number(temporaryContainer))
            // Clear the temporary container
            temporaryContainer= ""  
        }
    }

    //If the last character was a number, it means the container still holds one number.
    result.push(Number(temporaryContainer))

    return result;
}