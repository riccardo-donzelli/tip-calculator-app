// VARIABLES DECLARATION
const billInput = document.getElementById("bill-input");
const custom = document.getElementById("custom");
const peopleAmount = document.getElementById("people");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("total-person");
const resetButton = document.getElementById("reset");
const warningMessage = document.getElementById("warning");
const listOfButtons = document.querySelector("#buttons");

// FUNCTIONS
function focusInputData(e) {
    if (e.target.value == 0.00 || e.target.value == 0) {
        e.target.value = "";
    }
}

function peopleAmountData(e) {
    if (e.target.value == 0 || e.target.value == "") {
        warningMessage.style.display = "block";
        peopleAmount.style.border = "2px solid red";
    } else {
        warningMessage.style.display = "none";
        peopleAmount.style.border = "none";
    }
}

function calculateTip(e) {
    let target = e.target;
    let tip = target.value;
    const billInputValue = billInput.value;
    const numberOfPeople = peopleAmount.value;
    const totalResult = tip / 100 * billInputValue;
    const singleResult = totalResult / numberOfPeople;
    
    if (numberOfPeople == 0) {
        warningMessage.style.display = "block";
        peopleAmount.style.border = "2px solid red";
        return;
    }
    
    total.innerText = "$" + Number(totalResult).toPrecision(2);
    tipAmount.innerText = "$" + Number(singleResult).toPrecision(2);
}

function customTip() {
    const billInputValue = billInput.value;
    const numberOfPeople = peopleAmount.value;
    customValue = custom.value;
    const totalResult = customValue / 100 * billInputValue;
    const singleResult = totalResult / numberOfPeople;
    total.innerText = "$" + Number(totalResult).toPrecision(2);
    tipAmount.innerText = "$" + Number(singleResult).toPrecision(2);
}

function reset() {
    billInput.value = "0.00";
    peopleAmount.value = 0;
    total.innerText = "$0,00";
    tipAmount.innerText = "$0,00";
    warningMessage.style.display = "none";
    peopleAmount.style.border = "none";
}

// EVENT LISTENERS
billInput.addEventListener('focus', focusInputData);
peopleAmount.addEventListener('focus', focusInputData);
peopleAmount.addEventListener('blur', peopleAmountData);
listOfButtons.addEventListener('click', calculateTip);
custom.addEventListener('blur', customTip);
resetButton.addEventListener('click', reset);
