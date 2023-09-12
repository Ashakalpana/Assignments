//HOW TO ITERATE OVER AN ARRAY ? EXPLAIN WITH AN EXAMPLE..
// Arrays in javaScript are single variable used to store different kinds of elements
//  there are many ways to iterate over an array in javaScript
// for Example1:
// we will access simple array elements using ther index numbers
// let arr=['javascript','7','program']
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);



// EXAMPLE 2
//foreach()calls the provided function once for every array element in the order
let index=0;
let array=[1,2,3,4,5,6];
array.forEach(myFunction);
function myFunction(item,index){
    console.log(item);
}