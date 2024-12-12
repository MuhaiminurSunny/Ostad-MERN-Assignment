// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.


function calculateDifference(a,b){
    return a-b;
}

console.log(calculateDifference(5,3));


// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(a){
    if(a%2===0){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

isOdd(4)