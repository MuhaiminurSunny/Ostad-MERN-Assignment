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


// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(a){
    let e=[];
    for(let i=0;i<a.length;i++){
        if(a[i]%2===0){
            e.push(a[i]);
        }
    }
    return e;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(a){
    const sorted=a;
    for (let i=0;i<a.length-1;i++){
        for(j=i+1;j<a.length;j++){
            if(sorted[i]<sorted[j]){
                let temp=sorted[j];
                sorted[j]=sorted[i];
                sorted[i]=temp;
            }
        }
    }
    return sorted;
}

let number = [5, 2, 9, 1, 5, 6];
let sortedNumbers = sortArrayDescending(number);
console.log(sortedNumbers); 