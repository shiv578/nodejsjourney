let score=90;
let result;
// if(score>50){
//     console.log("pass");
// }
// else{
//     console.log("fail")
// }

// if(score>50){
//     result=("pass");
// }
// else{
//     result=console.log("fail")
// }
// console.log(result);


// ternory operator...............
// result-score>90?"pass":"fail";
// console.log(result);

// result=score>50 && "pass";
// console.log(result);

// result=score || 100;
// console.log(result);

switch(true){
    case score>50:
        console.log("pass");
        break;
    case score<50:
        console.log("fail");
        break;
    case score===50:
        console.log("just pass");
        break;
    default:
        console.log("invalid");
}

let subject="1";
switch(subject){
    case "1":
        console.log("hypertext markup language");
        break;
    case "2":
        console.log("casscading style sheet");
        break;
    default:
        console.log("unknown");

}