const marks = document.getElementById('marks')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', function() {
    console.log(marks)

    // if( marks.value >= 50) {
    //     result.innerHTML = "Pass"
    // }else {
    //     result.innerHTML = "Fail"
    // }

    if( marks.value >= 75) {
        result.innerHTML = "A"
    }else if( marks.value >= 65) {
        result.innerHTML = "B"
    }else if( marks.value >= 55) {
        result.innerHTML = "C"
    }else if( marks.value >= 35) {
        result.innerHTML = "S"
    }else {
        result.innerHTML = "F"
    }
})

const day = document.getElementById('day')
const qBtn = document.getElementById('qBtn')
const qResult = document.getElementById('qResult')

qBtn.addEventListener('click', function() {
    switch (day.value) {
        case 'Monday':
            qResult.innerHTML = "Get Ready To Work"
            break;
        case 'Wednesday':
            qResult.innerHTML = "Get Ready To Work"
            break;
        case 'Saturday':
            qResult.innerHTML = "Enjoy Your Weekend"
            break;
        default:
            qResult.innerHTML = "Enjoy Your Day"
            break;
    }
})

let a = true
let b = false

if(a) {
    console.log("a is True")
}

if(a && b) {
    console.log("a and b is True")
}

if(a || b) {
    console.log('a or b is True')
}