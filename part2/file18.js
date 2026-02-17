// const product=["p1","p2"]

// const products=[];
// products.forEach((product)=>console.log(product));
// add id,name,price,iscription 

const products=[
    {id:1,name:"user1",product:"laptop",price:1000,decription:"electronics product"},
    {id:2,name:"user2",product:"laptop2",price:2000,decription:"electronics product"},
    {id:3,name:"user3",product:"laptop3",price:3000,decription:"electronics product"},
]

// const cart=[]
// push in cart
let cart=[]

products.forEach((product)=>{
    // console.log(product)
    // cart.push({...product,quantity:1,total:product.price*product.quantity})
        product.quantity=2;
        product.total=product.price*product.quantity;
        // cart.push({product});
        cart=[...cart,product]
});
console.log(cart);

