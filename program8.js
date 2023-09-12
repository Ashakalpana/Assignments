//HOW TO ITERATE OVER AN OBJECT ? EXPLAIN WITH AN EXAMPLE..
//during iteration, you loop trough the object's properties one by one, and depending on the method you use for iteration 
// for example:
// using for...in loop

function obj(){
    let obj1={
        book:"maths",
        Author :"xyz"
    };
    for (let key in obj1){
        if( obj1.hasOwnProperty(key)){
            value=obj1[key];
            console.log(key,value);
        }
        }
}
obj();