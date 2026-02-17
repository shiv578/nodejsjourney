const products=[
    {id:1,name:"user1",product:"laptop1",price:1000,decription:"electronics product",category:"portable"},
    {id:2,name:"user2",product:"laptop2",price:2000,decription:"electronics product",category:"desktop"},
    {id:3,name:"user3",product:"laptop3",price:3000,decription:"electronics product",category:"remote"},
    {id:4,name:"user4",product:"laptop4",price:5000,decription:"electronics product",category:"workstation"},
    {id:5,name:"user5",product:"laptop5",price:5000,decription:"electronics product",category:"client work"},
    {id:6,name:"user6",product:"laptop6",price:6000,decription:"electronics product",category:"office work"}
]

let text="desktop"
let category="laptop6"
// method-1......................................
// const resultArray =products.map((product)=>{
//     const obj={...product};
//     return obj;
// })


// method-2......................................
// const resultArray=products.map((product)=>{
//     return product;
// })


// method-2 optimal ...............................
// const resultArray=products.map((product)=>product);


// method - for searching...............................
// const resultArray=products.map((product)=>product)
//     .filter((product)=>product.product.includes(search));

// const resultArray=products.filter((product)=>{
//     return product.category ===search;
// })

const resultArray=products.filter((product)=>product.category ===search);
console.log(resultArray);
