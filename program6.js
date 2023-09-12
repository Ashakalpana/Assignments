// implement array reversal. dont use builtin fuction

function reverseNumber(num){
    let newNumber=[];
    //createing for loop
    //the starting point (num.length-1) which corresponds to the last digit of the array
    for(let i=num.length-1;i>=0;i--){
    newNumber.push(num[i]);
    }
    // returning the reveresed string 
    return newNumber;
}
//const string= prompt('enter thr string:');
const result=reverseNumber([1,2,3,4,5]);
console.log(result);
