let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let price = document.getElementById("price").innerHTML;
let resultPrice = document.querySelector('.result-price');

let count = 500;
let result = 5;

updateDisplay();
resultCount();

counterPlusElem.addEventListener("click",()=>{
    count += 50;
    updateDisplay();
    resultCount();
}) ;

    
counterMinusElem.addEventListener("click",()=>{
    if (count > 500) {
        count--; 
        updateDisplay();
        resultCount();
    }
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
}

function resultCount() {
    resultPrice.innerHTML = count * Number(price) + ' ₽';
}