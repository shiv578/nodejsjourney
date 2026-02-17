numbers=[5,4,3,2,1]

// we use foreach because Runs for every element.
numbers.forEach((e)=>{
    console.log(e)
})


// map for used for transforming data and return new array
const multiply=numbers.map((e)=>{
    return e*2;
})
console.log(`map multiply:- ${multiply}`)


// used for selecting  data and return new array
const even=numbers.filter((e)=>{
    return e%2===0;
})
console.log(`filter even:- ${even}`)


// used for get one element first matching
const odd=numbers.find((e)=>{
    return e%2!==0;
})
console.log(`find odd:- ${odd}`)


// used for total / single value   return single value
const sum=numbers.reduce((sum,item)=>{
    return sum+item;
},0)
console.log(`reduce sum:- ${sum}`)



// check if at least one element matches condition
const result=numbers.some((e)=>{
    return e%2===0;
})
console.log(`some :- ${result}`)


// check atleast if more than 50 marks in any one subject then pass
let marks=[78,50,20,90]
const pass=marks.some((number)=>{
    return number>50;
})
if(pass)console.log("pass")
else console.log("fail");



// every used for cheking condition for every number if true then it will true
const eve=marks.every((number)=>{
    return number>50;
})
if(eve)console.log("pass")
else console.log("fail");


