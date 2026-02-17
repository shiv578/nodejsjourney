// setTimeout(()=>{console.log("hello")},1000)
// setTimeout(()=>{console.log("hello")},1000)



// promises..................
// function f1(){
//     setTimeout(()=>{
//         console.log("this is f1 function")
//         },5000)
// }

// function f2(){
//     console.log("this is f2 function")
// }
// f1()
// f2()

function f1(f){
    setTimeout(()=>{
        console.log("this is f1 function");
        f();
    },5000)
}

function f2(){
    console.log("this is f2 function")
}
f1(f2)
