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