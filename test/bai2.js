let inputNumber=document.getElementById('input')
let button=document.getElementById('button')

function spinNumber(params) {
    if(inputNumber.value==Math.floor(Math.random()*10)){
        alert('bạn đã đoán đúng')
    }
    else{
        alert('bạn đã đoán sai')
    }
}

button.addEventListener('click',spinNumber)