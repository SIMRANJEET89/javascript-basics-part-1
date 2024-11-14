// for loop

/*for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
 }

// console.log(element);
 
for (let i = 1; i <= 10; i++){
    //console.log(`outer loop value`);
    
       for(let j = 1; j <= 10; j++){
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*'+ j + "=" + i*j);
    
    
       }
}
//let myArray = ["batman", "superman", "flash"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}

//breal and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        //console.log(`Detected 5`);
        continue
    }
    //console.log(`value of i is ${index}`);
    
}

//================= while and do while loop =======================//


let index = 0
// while (index <= 10){
//       console.log(`value of index is ${index}`);
//       index = index + 2
// }
// let myArray = ["flash", "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
    
// }

// let score = 11

// do{
//   console.log(`score is ${score}`);
//   score++
  
// }while(score <= 10);


//================ high order array loops ======================//

// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    //console.log(num);
    
}
const greetings = "hello world"
for(const greet of greetings){
   // console.log(`Each char is ${greet}`);
    
}



//maps

//const map = new Map()
//map.set('IN', "India")
//map.set('USA', "United state of America")
//map.set('FR', "France")
//console.log(map);


for(const [key, value] of map){
    //console.log(key, ':-', value);
    
}
const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    //console.log(myObject[key]);
   // console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}
// const programmin = ["js", "rb", "py", "java", "cop"]

// for(const key in programmin){
//     // console.log(key);
//     console.log(programmin[key]);
    
// }



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United state of America")
// map.set('FR', "France")
// for(const key in map){
//     console.log(key);
// }

// const coding =["js", "rb", "py", "java", "cop"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) =>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
    
// })
//  const myCoding =[
//     {
//      languageName: "javascript",
//      languageFileName: "js"
//     },
//     {
//      languageName: "java",
//      languageFileName: "java"
//     },
//     {
//      languageName: "python",
//      languageFileName: "py"
//     }
// ]
// myCoding.forEach( (item) => {

//     console.log(item.languageName);
    
// })






// const coding =["js", "rb", "py", "java", "cop"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// })
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) =>num > 4)
//const newNums = myNums.filter( (num) => {
    //return num > 4
//})




// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
//  console.log(newNums)
 

//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10})
// console.log(newNums);


// const newNums = myNumbers
// .map( (num) =>num * 10 )
// .map( (num) => num + 1)
// .filter((num) => num >= 40)

// console.log(newNums);

//==================== reduse mathod=====================

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);*/

const shoppingCart = [{
    itemName: "py cource",
    price: 9999
},
{
    itemName: "java cource",
    price: 9899
},
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
