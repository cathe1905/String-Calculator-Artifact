// SIMPLE SUMMATION: This function will be responsible for summing all numbers within a string, with  0 and 2 elements.
function intAdd (str){

    // Evaluate if str is an empty string
    if(str === ""){
        return 0;
    }

    //Transform the string into an array by separating them with a comma.
    const newArray= str.split(",");
    
    //Evaluate if newArray contains one or two elements and then make the sum
    switch(newArray.length){
        case 1:
            return Number(newArray[0]);
        case 2:
            return Number(newArray[0]) + Number(newArray[1]);
    }

}

// Tests
console.log(intAdd(""))
console.log(intAdd("1"))
console.log(intAdd("1,2"))
console.log(intAdd("30,55"))
console.log(intAdd("17"))

// Technical Justification of the Solution
// I decided to emphasize simplicity because the function will only
// receive 0, one, or two elements. It's not worth using methods or loops 
// for just one sum.
