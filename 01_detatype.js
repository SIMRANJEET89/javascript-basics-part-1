"use strict"; // treat all js code as newer version

// alert{3+3} //we are using node js, not browser

//console.log(3+3); console.log("simran") ---->>>  //this is not a good practic, // code  readablity that should be high


/*let name = "simran"
let age = 20
let isLoggedIn = false


// number => 2 to power 53 
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique



//object

console.log(typeof null);//object
console.log(typeof undefined);//undifined*/




//*************** primitive*************** */
//  ? type: string, number, null, boolean, undefind, symbol, BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId)


const bigNumber = 34567823903456589n



// ************** refrence (none primitive) *****************
// array, objects, funshions 
   
const heros = ["shaktiman", "naagraj", "doga" ] // []-------> array
 let myobj = {
    name: "simran",                           // {}-------> object
    age: 20,
}
  const myfunction = function(){
    console.log("hello world");
  }
console.log(typeof heros );
