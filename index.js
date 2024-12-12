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


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(a){
    if(a.length===0){
        return undefined;
    }
    let min=a[0];
    for (let i=1;i<a.length;i++){
        if(min>a[i]){
            min=a[i];
        }
    }
    return min;
}

const a=[1,2,3,4,11,1,0];
minNumber=findMin(a)
console.log(minNumber);