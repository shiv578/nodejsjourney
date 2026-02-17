// function response(){
//     console.log(users); //{name:'john',email:'john@gmail.com',role:'user'}
// }

function response({name,email,role}){
    console.log(name,email,role); //john john@gmail.com user
}
const users={
    name:"john",
    email:"john@gmail.com", 
    role:"user"
}
response(users)
