let rotate = document.getElementById('dice');
let number = document.getElementById('number');
function roll(){
    rotate.classList.add('dices');
    number.innerText = ' ';
    setTimeout(()=>{
        let random = Math.floor(Math.random()*6)
        rotate.classList.remove('dices');
        number.innerText=random;
    },1200)
}