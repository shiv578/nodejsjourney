export const products=[
    {id:1,name:"user1",product:"laptop1",price:1000,decription:"electronics product",category:"portable"},
    {id:2,name:"user2",product:"laptop2",price:2000,decription:"electronics product",category:"desktop"},
    {id:3,name:"user3",product:"laptop3",price:3000,decription:"electronics product",category:"remote"},
    {id:4,name:"user4",product:"laptop4",price:5000,decription:"electronics product",category:"workstation"},
    {id:5,name:"user5",product:"laptop5",price:5000,decription:"electronics product",category:"client work"},
    {id:6,name:"user6",product:"laptop6",price:6000,decription:"electronics product",category:"office work"}
]
const cart=[]
function addToCart(text){
    const product = products.find(product => product.id === text);
    cart.push({...product,quantity:1});

    // console.log(product);
    // if(product){
    //     cart.push(product);
    // }
}

function increment(text){   
    const product = cart.find(product => product.id === text);
    product.quantity++;
}

function decrement(text){
    const product=cart.find(product=>product.id===text);
    product.quantity--;
}

function calculateTotal(){
    // let total=0;
    // for(items of cart){
    //     total=total+items.price*items.quantity;
    // }
    // return total;

    let total=cart.reduce((sum,items)=>{
        return sum+(items.price*items.quantity)
    },0);
    return total;
}

function placeOrder(){
    if (cart.length === 0){
        console.log("Cart is empty");
        return;
    }
    const totalprice = calculateTotal();


    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     total = total + cart[i].price * cart[i].quantity;
    // }
    const order={
        email:"john@example.com",
        items:cart,
        orderValue:total,
        date:new Date(),
        orderId:1,
        price:totalprice,
    }
    console.log("order placed successfully")
    // console.log(order);
    cart.forEach((c)=>{
        const itemTotal = c.price * c.quantity;
        console.log(`${c.id}-${c.name}-${c.decription}-${c.price}-${c.product}-${c.quantity}-${itemTotal}`)})
    
}

console.log("***flipcart***")
products.forEach((c)=>console.log(`${c.id}-${c.name}-${c.decription}-${c.price}-${c.product}`))
addToCart(1);
addToCart(3);
addToCart(5);
// console.log(cart);
console.log("....................................")

increment(1);
increment(5);
// console.log(cart);


// decrement(1);
// decrement(5);
// console.log(cart);


// const order={
//     email:"john@example.com",
//     items:cart,
//     orderValue:1000,
//     status:"pending"
// }


placeOrder()


