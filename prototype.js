// let myName = "simmi      "
// let myChannel = "chai   "
// console.log(myName.truelength);



let myHeros= ["thor", "spidermen"]

let heroPower = {
    thor: "hammer",
    spidermen: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spidermen}` );
        
    }
}

Object.prototype.simmi = function(){
    console.log(`simmi is present in all objets`);

    
}
Array.prototype.heySimran = function(){
    console.log(`simran says hello`);
    
}

// heroPower.simmi()
// myHeros.simmi()
// myHeros.heySimran()
// heroPower.heySimran()

// inheritance

const User ={
    name: "simmi",
    email:"simmi@goggle.com"
}

const Teacher = {
    makeVideo: false
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: `js assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "codeloverme   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"simran".trueLength()
"icetea".trueLength()