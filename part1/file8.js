// let a=10;
// const a=10;
// // a=20; // error because we cannot reassign a constant variable

// let b=5;
// console.log(b); 
// b=20; // we can reassign a variable declared with let
// console.log(b);

// var c=15;
// console.log(c);
// c=25; // we can reassign a variable declared with var
// console.log(c);




// let d=30;
// function f1(){
//     let d=20;
//     console.log(d); // 20
// }
// f1();
// console.log(d); // 30


let d1=30;
function f1(){
    let d1=20;
    if(3>1){
        let d1=10;
        console.log(d1); // 10  
    }
    console.log(d1); // 20 because let is block scoped and not function scoped
}
f1();
console.log(d1); // 30

var e=40;
function f2(){
    var e=50;
    if(3>1){
        var e=60;
        console.log(e); // 60  
    }
    console.log(e); // 60 because var is function scoped and not block scoped
}
f2();
console.log(e); // 40

firstName="John";
first_name="John"; // both are valid variable names but we should use camelCase for better readability
FirtsNmae="John"; // this is not a valid variable name because it starts with a capital letter
