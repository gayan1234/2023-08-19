// for(let i = 0; i<100; i++){
//     console.log(i)
// }

// for(let i = 1; i<=100; i++){
//     console.log(i)
// }

// for(let i = 2; i<=100; i+=2){
//     console.log(i)
// }

const cars = ['BMW', 'Nissan', 'Tesla', 'Audi']
let out = ''
// for(let i = 0; i<cars.length; i++) {
//     out += '<li>' + cars[i] + '</li>'

// for(let i = 1; i<=cars.length; i++) {
//     out += '<li>' + cars[i-1] + '</li>'
// }

// cars.forEach(function (car) {
//     out += '<li>' + car + '</li>'
// })
document.querySelector('#list').innerHTML = out

let j = 0
while(j<10) {
    console.log(j)
    j++
}

console.log('------------------------------')

// let k = 0
// do {
//     k++
//     console.log(k)
// }while(k<10)

// let k = 0
// do {
//     if(k==5) {
//         break
//     }
//     k++
//     console.log(k)
// }while(k<10)

let k = 0
do {
    k++
    if(k==8) {
        break
    }
    if(k==3) {
        continue
    }
    console.log(k)
}while(k<10)