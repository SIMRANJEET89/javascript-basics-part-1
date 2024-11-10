//arrays

const myArr =[0, 1, 2, 3, 4, 5]
const myHeors =["shaktimaan", "naagraj"]

const myArr2 = new Array (1, 2, 3, 4)
//console.log(myArr[1]);

//Array methods

//myArr.push(6)
//myArr.push(7)//-----------------------> add new value
//myArr.pop() //------------------------> remove last value



//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));


//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);


/******************** slice, splice ****************** *

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr );


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

console.log(myn2);*/



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);



//console.log(Array.isArray("simran"))
//console.log(Array.from("simran"));
//console.log(Array.from({name: "simran"}));// instrasting

let score1 = 100
let score2 = 200
let score3 = 300
 
//console.log(Array.of(score1, score2, score3));


//============OBJECTS==============

//singleton 
// object literals
//Object.create



const mySym = Symbol("key1")


const JsUser = {
    name: "simran",
    "full name": "simranjeetkour",
    [mySym]: "mykey1",
    age: 20,
    location: "jaipur",
    email: "simranjeet@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}
/*console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);*/



JsUser.email = "koursimmi@goggle.com"
//Object.freeze(JsUser)
JsUser.email = "kourgirl@chatgpt.com"
//console.log(JsUser);

JsUser.greeting = function(){
    //console.log("hello js user");
}
JsUser.greetingTwo = function(){
    //console.log(`hello js user, ${this.name}`);
}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

//+++++++++++++++ object 2 +++++++++++++++++++//

//const tinderUser = new Object ()
const tinderUser = {}
 

tinderUser.Id = "123abc"
tinderUser.name = "simmi"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "simmi@gmail.com",
    fullname:{
        userfulname: {
            firstname: "simran",
            lastname: "kour"
        }
    }
}
//console.log(regularUser.fullname.userfulname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        name:  "simmi",
        password: "123445"
    }
]
users[1].email
/*console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));*/

// ===================== object de-structure and JSON API =======================


const course = {
    coursename: "java basic",
    price: "999",
    courseInstructor: "simmi"
}
//course.courseInstructor
 const {courseInstructor: instructor} = course  //[courseInstructor: instructor]---------------> this is de-structureing
// console.log(courseInstructor) = course
console.log(instructor);

//{
//    name: "simran"
//    coursename: "java"
//    price: "free"
//}