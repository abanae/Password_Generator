
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

  // Lower Function
  
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

//Uppercase Function

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
  
//   //Numbers Function

  function numbers(){
    numberConfirm = prompt(`Would this include numbers? \n(Yes or No)`);
      if (numberConfirm === null || numberConfirm === ""){
        alert(`Please answer Yes or No`);
        numbers();
  
      }else if (numberConfirm === "yes"){
        numberConfirm = true;
        return numberConfirm;
  
      }else if (numberConfirm === "no"){
        numberConfirm = false;
        return numberConfirm;
      
      }else {
        alert(`Please answer Yes or No`);
        numbers();
      }
      return numberConfirm;
  }
  
//   //Symbols Function
  function specialChar(){
    synbolComfirm = prompt(`Would this include special characters? \n(Yes or No)`);
      if (synbolComfirm === null || synbolComfirm === ""){
        alert(`Please answer Yes or No`);
        specialChar();
  
      }else if (synbolComfirm === "yes"){
        synbolComfirm = true;
        return synbolComfirm;
  
      }else if (synbolComfirm === "no"){
        synbolComfirm = false;
        return synbolComfirm;
      
      }else {
        alert(`Please answer Yes or No`);
        specialChar();
      }
      return synbolComfirm;
  }
  
//    Password Generator Function

  function passwordGen(){
    passwordSize();
    console.log(usersLength);
    lowerCase();
    console.log(lowerConfirm);
    upperCase();
    console.log(upperConfirm);
    numbers();
    console.log(numberConfirm);
    specialChar();
    console.log(symbolConfirm);
    totalChar();
    console.log(totalChar);
  }
  
  var characters = function () {
    var totalChar = "";
      if (lowerConfirm ==="yes") { 
     totalChar = characters.concat(lower);
     }hi 
      if (upperConfirm === "yes") {
     totalChar = totalChar.concat(upper);
     }
     if (numberConfirm === "yes") {
     totalChar = totalChar.concat(number);
     }
     if (symbolConfirm === "yes") {
     totalChar = totalChar.concat(symbol);
    }
    return totalChar;
  }

  // function passwordGen () {
  //   var another = ""; 
  //   for (var i = 0; i< usersLength; i++){
  //   var nextRow =totalChar.charAt(Math.floor(Math.random));
  //    another = another.concat(nextRow);
  //   }
  //   return another;
  //   }
 

//   // Input Generated
  function inputPassword() {
   var  result = passwordGen();
    var passwordResult = document.querySelector(`#password`);
    passwordResult.value = result;
  }

// Reset Function
  function reset(){
    document.getElementById(`password`).value = `Your Secure Password`;
  }

$button.addEventListener(`click`, inputPassword);
