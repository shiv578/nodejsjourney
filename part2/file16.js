let  cart=[]
// click on add to cart on iphone product
cart=[...cart,{name:"iphone",price:1000,quantity:1}];
// console.log(cart);

// click on add to cart on speaker product
cart=[...cart,{name:"speaker",price:500,quantity:1}];
console.log(cart);


const order={
    email:"john@example.com",
    items:cart,
    orderValue:1000,
    status:"pending"
}

db.orders.insertOne(order);

// create  flipcart database
// create collection orders-> email,itesms,orderValue,status,orderDate
// ccreate collection users -> name,email,password, role
// inser seed data 
// write aggregate query to display all the orders placed by a perticular user
