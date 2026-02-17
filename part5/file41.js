function makePayment(){
    return new Promise((resolve,reject)=>{
        // reject("something went wrong");
        // resolve()
        setTimeout(()=>{
        console.log("payment has be processed");
        resolve();
        },5000)
    });
}

function sendConfirmation(){
    console.log("order has been placed successfully")
}

// callback hell......................
// makePayment(sendConfirmation)

makePayment()
.then(()=>sendConfirmation())
.catch((err)=>console.log(err));