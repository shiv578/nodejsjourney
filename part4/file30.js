// import {add,sub} from "./calc.js"  :- when both are non default export 
// import add,{sub} from "./calc.js":- when one is default . sub is non default so thats why its in braccket
// import {name} from "./calc.js"  

import add,{sub,name} from "./calc.js"
import {products} from "./data.js"
let res=add(4,5);
console.log(res);

let res1=sub(6,3);
console.log(res1);

console.log(name)
console.log(products);

