// hoisting..............
// console.log(name)       //undefined
// var name="john";

// var n1;
// console.log(n1)        //undefined
// n1="mrbean"

// console.log(n1)        reffrence error.we cannot acces before initialization.
// let n1="mrbean"

// let n1;
// console.log(n1)     // undefined.
// n1="mrbean"

// tdz :---Temporal Dead Zone is the time between variable declaration and initialization
// when using let and const, during which the variable exists but cannot be accessed.



// function are fully hoisted..
// greet()
// function greet(){
//     console.log("hello world")
// }
// it will error because of arrow in store in variable
// greet()
// const greet=()=>{
//     console.log("hello world")
// }


const greet=()=>{
    console.log("hello world")
}
greet()