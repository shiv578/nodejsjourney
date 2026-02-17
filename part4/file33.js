// names=["john","catht","mike"]
// const [s1,s2]=names;
// console.log(s1)
// console.log(s2)


let user = {
  name: "Shubham",
  age: 22
};

// let {name, age} = user;
// console.log(name); // Shubham
// console.log(age);  // 22


const student={
    name:"john",
    age:21,
    // city:"jalandhar"
    marks:{
        math:60,
        science:90
    }
}
// let{n,a}=student;
// let {name: n, age: a} = student;
// console.log(n)
// console.log(a)

// let{city="punjab"}=student; //it will work when actuall value missing or not work
// console.log(city); //jalandhar

const {marks:{math}}=student
console.log(math) // 60

const {marks}=student
console.log(marks) //{math:60,science:90}





