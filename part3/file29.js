// function add(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add(4,5);

// function add(){
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[0]);
// }
// add(4,5);
// add(4,5,6,7,8,9)



// function add(...arr){
//     // console.log(arr);
//     return arr.reduce((sum,item)=>{
//         return sum+item;
//     },0)

// }
// // add(4,5);
// const result=add(4,5,6,7,8,9);
// console.log(result);


// const add=(...arr)=>{
//     // let sum= arr.reduce((sum,item)=>sum+item)
//     // return sum;
// }
// const result=add(4,5,6,7,8,9);
// console.log(result);


const add=(...arr)=>{
    return arr;
    // console.log(arr);
}
const result=add(4,5,6,7,8,9);
console.log(result);