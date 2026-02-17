
const products=[
    {id:1,name:"user1",product:"laptop",price:1000,decription:"electronics product"},
    {id:2,name:"user2",product:"laptop2",price:2000,decription:"electronics product"},
    {id:3,name:"user3",product:"laptop3",price:3000,decription:"electronics product"},
]

// let cart=[]
// products.forEach((product)=>{
//     const obj=
//             {...product,
//             quantity:1,
//             total:product.price*product.quantity}

//         cart=[...cart,obj]
// });
// console.log(cart);

// let cart=[];
const cart = products.map((product)=>{
    const obj={...product,quantity:1};
    return obj;
})
console.log(cart);


