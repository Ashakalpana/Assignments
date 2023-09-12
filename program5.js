// implement string reversal. dont use builtin fuction
function reverseString(str){
    var newString="";
    //createing for loop
    //the starting point (str.length-1) which corresponds to the last character of the string
    for(var i=str.length-1;i>=0;i--){
    newString+=str[i];
    }
    // returning the reveresed string 
    return newString;
}
//const string= prompt('enter thr string:');
const result=reverseString('welcome to javascript');
console.log(result);