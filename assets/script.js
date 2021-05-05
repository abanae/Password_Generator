
const $button = document.querySelector(`#generate`);

// $button.addEventListener(`click`, () => {
// alert(`Welcome to the Password Generator!`);
// });

// Assigned Variables
var lower = `abcdefghijklmnopqrstuvwxyz`;
var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var number = `0123456789`;
var symbol = `~!@#$%^&*()_+-={}[]/?<>.,|;:'"`
var usersLength;
var lowerConfirm;
var upperConfirm;
var numberConfirm;
var symbolConfirm;
var totalChar;

// //User Choices
// Lenght of Password

function passwordSize(){
  usersLength = prompt(`Choose a length of at least 8 characters and no more than 128 characters`);

    if (usersLength<8){
      alert(`Password lenght MUST be at least 8 characters`);
      passwordSize();

    }else if (usersLength>128){
      alert(`Password length MUST be no more than 128 characters`);
      passwordSize();

    }else if (isNaN(usersLength)){
      alert(`Password length MUST be between 8-128 characters`);
      passwordSize();
    }
    return usersLength;
}

// Letter case (/lower)

function lowerCase(){
  lowerConfirm = prompt(`Would this include lowercase letters? \n(Yes or No)`);
    if (lowerConfirm === null || lowerConfirm === ""){
      alert(`Please answer Yes or No`);
      lowrCase();

    }else if (lowerConfirm === "yes"){
      lowerConfirm = true;
      return lowerConfirm;

    }else if (lowerConfirm === "no"){
      lowerConfirm = false;
      return lowerConfirm;
    
    }else {
      alert(`Please answer Yes or No`);
      lowerCase();
    }
    return lowerConfirm;
}

// Letter case (/upper)

function upperCase(){
  upperConfirm = prompt(`Would this include uppercase letters? \n(Yes or No)`);
    if (upperConfirm === null || upperConfirm === ""){
      alert(`Please answer Yes or No`);
      upperCase();

    }else if (upperConfirm === "yes"){
      upperConfirm = true;
      return upperConfirm;

    }else if (upperConfirm === "no"){
      upperConfirm = false;
      return upperConfirm;
    
    }else {
      alert(`Please answer Yes or No`);
      upperCase();
    }
    return upperConfirm;
}
