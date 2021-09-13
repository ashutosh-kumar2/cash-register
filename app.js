const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const cashGivenDiv = document.querySelector(".cashGivenInput");
const errorMessage = document.querySelector(".error-message");
const changeReturn = document.querySelector(".change-return");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

nextButton.addEventListener("click", nextButtonHandler);
function nextButtonHandler(){
    hideError();
    if(Number(billAmount.value)>0){
        nextButton.style.display="none";
        cashGivenDiv.style.display="block";

    }else{
        showError("Enter Valid Bill Amount");
    }    
}

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount(){
    hideError();
    clearNotes();
    if(Number(billAmount.value>0) && Number(cashGiven.value)>0){

        if(Number(cashGiven.value)>Number(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else if(billAmount.value === cashGiven.value){
            showError("No Amount to be returned");
        }
        else{
            showError("Cash given is less than the bill amount, please enter right amount")
        }
    }else{
        showError("Enter valid Bill Amount and Cash Given to Continue");
    }
}

function calculateChange(amountToBeReturned){
    changeReturn.style.display = "block";

    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        if(numberOfNotes>=1){
            noOfNotes[i].innerText = numberOfNotes;
        }
    }
}

function showError(text){
    errorMessage.style.display = "block";
    errorMessage.innerText= text;
    changeReturn.style.display = "none";
}

function hideError(){
    errorMessage.style.display = "none";
}

function clearNotes(){
    for(let nnotes of noOfNotes){
        nnotes.innerText = "";
    }
}