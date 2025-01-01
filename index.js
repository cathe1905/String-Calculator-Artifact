// COMPLEX DELIMITERS: This function will maintain the previous functionalities, 
// while also supporting multiple delimiters with lengths longer than one character.


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
intAdd("//*%\n1*2%3")
intAdd("//*%?\n1*2%3?5")
intAdd("//***%%??????\n1***2%%3??????20")


// Technical justification of the solution


//In this last task, I made a small modification to one of the helper functions to ensure that the array of 
// delimiters could be evaluated correctly when their length is greater than one. The approach that was developed 
// in my String Calculator, separating responsibilities and ensuring that only the necessary functions ran, 
// made it much easier to add new functionalities to my String Calculator. I finally achieved an efficient 
// calculator that handles all 9 cases presented in this challenge.



//HELPER FUNCTIONS

function findCustomDelimiter(input) {

    //check if the delimiter pattern exists
    if(input[0] === "/" && input[1] === "/" && input.includes('\n')){
        //look for the position of the newline.
        const position= input.indexOf('\n');
        //use the position to determine where the cut should end to identify the delimiter.
        const delimiter= input.slice(2, position)

        //If the delimiter has a length of one, we don't need to process anything; we return it as is.
        if(delimiter.length === 1){
            return delimiter
        }

        //If the delimiter has a length greater than one, we need to determine if the characters 
        // are the same (single delimiter) or if they are different (multiple delimiters).

        //The container starts with the first character of the string as a reference for the evaluations.
        let container= delimiter[0];


        //We begin iterating from the second element of the delimiter; if the element is the 
        // same as the previous one, we store them together in the container.
        for(let i=1; i < delimiter.length; i++){
            if(delimiter[i] === delimiter[i - 1]){
                container+= delimiter[i]
            //Otherwise, a comma is used to separate them and they are stored accordingly.
            }else{
                container+= ","
                container+= delimiter[i]
            }
        }
        //If the container is equal to the delimiter, it means it has not changed during the loop, so it's a single delimiter.
        //Otherwise, it means it includes commas due to the loop, and we use the commas to separate the delimiters.
       return container === delimiter ? delimiter : container.split(",")

    }
        //If the custom delimiter pattern is not found, it returns ""
        return ""
    
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
    let array;

    //analyze whether the delimiter is a string or an array. If it's a string, 
    // it's considered a single delimiter; if it's an array, it represents multiple delimiters.
    if(typeof delimiter === 'string'){
        //Split the string using the delimiter.
        array= divided.split(delimiter);
         //Convert the elements into numbers.
        const numbers= array.map(elem => Number(elem))
        
        return numbers

    }else{
       //Join the array of delimiters into a string for easier evaluation.
        const delimiterIntoString= delimiter.join('');
        array=[];
        let temporaryContainer=""; // Temporary container for data
        
        for(let i=0; i < divided.length; i++){
            //Check if the character is within the string of delimiters
            if(!delimiterIntoString.includes(divided[i])){
                //Add it to the temporary container
                temporaryContainer+= divided[i];
            }else{
                //Add it to the array
                array.push(Number(temporaryContainer))
                // Clear the temporary container
                temporaryContainer= ""  
            }
        }
        //If the last character was a number, it means the container still holds one number.
        array.push(Number(temporaryContainer))
        return array;
        
    }
    
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