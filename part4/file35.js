// const name=["suraj","ajay","sumanth","satyam"]
const name=new Array("suraj","ajay","sumanth","satyam")

// add at last
name.push("vivek")  //[ 'suraj', 'ajay', 'sumanth', 'satyam', 'vivek' ]
console.log(name);

//remove from last
name.pop()          //[ 'suraj', 'ajay', 'sumanth', 'satyam' ]
console.log(name);

// skip first element
name.shift();       //[ 'ajay', 'sumanth', 'satyam' ]
console.log(name)

//add at first 
name.unshift("vivek") //[ 'vivek', 'ajay', 'sumanth', 'satyam' ]
console.log(name)

console.log(name.sort())  //short injn alphabeticale order
console.log(name.reverse())   //reverse the array

const  numbers=[1,2,3,6,8,4,5,6]
console.log(numbers.sort())

console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a));
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(2));

console.log(numbers.includes(3))
console.log(numbers.slice(1,4))

