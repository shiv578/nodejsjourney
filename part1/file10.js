// let a=10;
// console.log(a);  -->10

let a = function greet(){
    console.log("Hello");
}
a();              //-->Hello
console.log(a);  //-->[Function: greet]


let greet = () => {
    console.log("Hello");
}   
greet();        //-->Hello
console.log(greet);  //-->[Function: greet]


let add=(a,b)=>{
    console.log(a+b);
}
add(5,10);     //-->15


let sum=(a,b)=>{
    return a+b;
}
let result=sum(5,10);
console.log(result);  //-->15
