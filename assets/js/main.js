let btn = document.querySelector("#btn")
let out = document.querySelector("#out")

btn.addEventListener('click', function(){
    out.innerHTML = "Button Click"
});

btn.addEventListener('mouseover', function(){
    console.log('hover')
})

// strings

let str1 = "String One"
let str2 = "String Two"
let str3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam possimus recusandae suscipit corporis dignissimos? Adipisci sint saepe inventore praesentium vero deleniti quibusdam optio similique assumenda commodi, nesciunt, libero explicabo!"

//length
console.log(str1.length)

//slince
console.log(str1.slice(0,6))
console.log(str1.slice(7,10))
console.log(str3.slice(10))
console.log(str2.slice(-3,-1))

//substring
console.log(str1.substring(0,6))

//substr
console.log(str1.substr(3,5))


const text = document.querySelector('#text')
const find = document.querySelector('#find')
const replace = document.querySelector('#replace')
const btnFR = document.querySelector('#btnFR')
const outFR = document.querySelector('#outFR')

btnFR.addEventListener('click',function(){
    console.log(text.value)
})

