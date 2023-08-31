const c = document.querySelector('#celsius')
const f = document.querySelector('#fahrenheit')
const c2f = document.querySelector('#c2f')
const f2c = document.querySelector('#f2c')

c2f.addEventListener('click', () => {
    if(c.value == "") {
        alert("Please enter a value")
        return
    }
    f.value = (c.value * 9/5) + 32
})

f2c.addEventListener('click', () => {
    if(f.value == "") {
        alert("Please enter a value")
        return
    }
    c.value = (f.value - 32) * 5/9
})

/*let btn = document.querySelector("#btn")
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


//Concatenation
console.log(str1 +' '+ str2)
console.log(str1.concat(' ', str3,' ',str2))
*/

// const text = document.querySelector('#text')
// const find = document.querySelector('#find')
// const replace = document.querySelector('#replace')
// const btnFR = document.querySelector('#btnFR')
// const outFR = document.querySelector('#outFR')

// // Change first text
// btnFR.addEventListener('click',function(){
//     let output = text.value
//     output = output.replace(find.value, replace.value)
//     outFR.innerText = output
// })

// Change all text
/*btnFR.addEventListener('click',function(){
    let output = text.value
    output = output.replaceAll(find.value, replace.value)
    outFR.innerText = output
})
*/

// Change all text, Text tranform and Trim
// btnFR.addEventListener('click',function(){
//     let findText = find.value
//     findText = findText.trim();

//     let output = text.value

//     output = output.replaceAll(findText, replace.value.trim())
//     outFR.innerText = output
//     //console.log(output.toUpperCase())
// })



