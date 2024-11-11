
function sayMyName(){
    console.log("s");
    console.log("i");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
}
// sayMyName()

/*function addToNumbersn(number1, number2){

       console.log(number1 + number2);
}

function addToNumbersn(number1, number2){

    //let result = number1 +number2
    //return result
    return number1 +number2
}


const result = addToNumbersn(3, 5)

//console.log("result:", result);

/*function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
    
}
//console.log(loginUserMessage("simmi"))
//console.log(loginUserMessage());


function calculaterCartPrice (val1, val2, ...num1){
    return num1
}
// console.log(calculaterCartPrice(200, 400, 500));
const user = {
    username: "simi",
    price: 199
}
function handleObject(anybject){
    // console.log(`Username is ${anybject.username} and price is ${anybject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"simmi",
    price: "399"
})

const myNewArray = [200, 400, 100, 600]
function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
//console.log(returnSecondvalue([200, 400, 500,1000]));

//  ++++++++++++++++++++ globl and local scope in javascript +++++++++++++++++++++++++
let a = 300
//const b = 20
//var  c = 300


{} //----------------------------------this is scope [when it use with if, else, function]

if (true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
     
}

//console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "simmi"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    
    two()
}
// one()


if(true){
    const username ="simran"
    if(username === "simran"){
        const website = "  youtube"
      //  console.log(username + website);
        
    }
    //console.log(website);
    
}
// console.log(username);


//========================intersting ===================


//console.log(addone(5))

function addone(num){
    return num + 1
}
// addone(5) 


addTwo(5)
const addTwo = function(num){
    return num + 2
}
// addTwo(5)*/

//======================arrow function==========================


/*const user = {
    username: "simmi",
    price: 999,

    welcomeMessage: function(){
        // console.log(` ${this.username} ,welcome to website`);
        // console.log(this);
        
    }

}
//user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);

/*function one(){
    let username = "sam"
    console.log(this.username);
    
}
one()

const one = () =>{
    let username = "simmi"
    // console.log(this);
    
}
// one()

// const addTwo = (num1, num2) => {
    // return num1 + num2 
// }
const addTwo = (num1, num2) => (num1 + num2)


// console.log(addTwo(3, 4));

//const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()*/

// ********************** [ IIFE ] - immediately invoked function ********************************

(function red(){
    console.log('DB CONNECTED');
    
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('simran')


