//stack heap memory
//primitive type use stack memory (copy)
//non primitive type use heap memory (refrence / orignal value)

/*let myYoutubename = "simranjeetkour"

let anothername = myYoutubename
anothername = "kourgirl"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "simran@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 
userTwo.email = "simmi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);*/


                       //strings//

const name = "simran"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("simran")
/*console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
log*/
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`r`));

const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   simran    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:simran.com/simran%20kour"
console.log(url.replace('%20', '_'))

console.log (url.includes('simran'))
console.log (url.includes('noor'))

console.log(gameName.split('_'));
