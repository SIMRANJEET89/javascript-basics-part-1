// if 


const isUserloggedIn = true
const temperature = 41

if (temperature === 51){
      console.log("less than 50");
      
}else{
    console.log("temperature is greater than 50");

}
console.log("Execute");


if (2 != "2"){
    console.log("executed")
}


const score = 200 

if (score > 100) {
   let power = "fly"
   console.log(`User power: ${power}`);
   
}

console.log(`User power: ${power}`);


const balance = 1000

if(balance > 500) console.log("test");


if (balance < 500){
    console.log("less than ");
    
}else if(balance < 750){
    console.log("less than 750");
    
}else if (balance < 900){
    console.log("less than 750");
    
}else {
    console.log("less than 1200");
    
}


// const isUserloggedIn = true
const debitCard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true


if (isUserloggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}
if (loggedInFromGoggle || loggedInFromEmail){
    console.log("User logged in");
    
}
// // ================= switch ==================
// /*switch (key) {
//     case value:

//        break:

//     default:
//         break:
// }*/

const month = "feb"

switch (month) {
    case 1:
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("octobar");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("Default case match");
        
        break;
}
//======= true / false=============

const userEmail = []

if (userEmail){
    console.log("Got the email");
    
}else{
    console.log("Don't have user email");
    
}
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truethy values
// "0"(0 in string), "false"(in string), " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
    
}

// const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??); null undefined


let vel1;
// vel1 = 5 ?? 10
// vel1 = null ?? 10
// vel1 = undefined ?? 15
vel1 = null ?? 10 ?? 15

 console.log(vel1);

// terniary Operator 

// condition ? true : false

const  iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

console.log(vel1);
