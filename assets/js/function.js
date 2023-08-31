function addTwoNumbers(a,b) {
    return a+b;
}

// function getSqRoot(a) {
//     console.log(Math.sqrt(a))
//     return Math.sqrt(a);
// }

function getCercumference(r) {
    //2*PI*r
    //console.log(2*Math.PI*r)
    return 2*Math.PI*r;
}

let circumference = getCercumference(5)

console.log(circumference)


//Arrow function
const getArea = (radius) => {
    return Math.PI*radius*radius;
}

console.log(getArea(5))


//Scope
let lastName = "Doe"

function myFunction() {
    console.log("Hello World")
    let firstName = "Jhon"
    console.log(firstName)
    console.log(lastName)
}
myFunction()
console.log(lastName)
console.log(firstName)