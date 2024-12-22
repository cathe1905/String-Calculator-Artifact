// INFINITIVE ARITHMETIC: This function will be responsible for summing all numbers within a string, and support an unknown number of inputs.
function intAdd (str){

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }

    //Transform the string into an array by separating them with a comma.
    const newArray= str.split(",");
    
    //variable for the result
    let result= 0;

    // Iteration for summing all elementes within newArray
    for(let i=0; i < newArray.length; i++){
        result += Number(newArray[i])
    }

    return result;

}

// Tests
console.log(intAdd(""))
console.log(intAdd("1"))
console.log(intAdd("1,2"))
console.log(intAdd("30,30, 40, 50, 100, 25, 10"))
console.log(intAdd("17, 3, 20"))
console.log(intAdd("5,12,18,20,25,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300"));


// Technical Justification of the Solution
// I made a modification to the previous function by replacing the switch with a loop. 
// This change was necessary because I didn't know how many numbers would be in the string.
// A loop is better option than other JavaScript methods because it's a simple solution and reduces
// the execution time.

