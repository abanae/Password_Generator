
// const $button = document.querySelector(`#generate`);

// $button.addEventListener(`click`, () => {
// alert(`Welcome to the Password Generator!`);
// });

// Assigned Variables

var button = document.querySelector(`#generate`);
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

  function lowerCase(){
    lowerConfirm = prompt(`Would this include lowercase letters? \n(Yes or No)`);
    //   lowerConfirm = lowerConfirm.toLowerCase();
  
      if (lowerConfirm === null || lowerConfirm === ""){
        alert(`Please answer Yes or No`);
        upperCase();

      }else if (lowerConfirm === "yes"){
        upperConfirm = true;
        return lowerConfirm;
  
      }else if (lowerConfirm === "no"){
        upperConfirm = false;
        return lowerConfirm;
      
      }else {
        alert(`Please answer Yes or No`);
        upperCase();
      }
      return lowerConfirm;
  }

//Uppercase Function

function upperCase(){
    upperConfirm = prompt(`Would this include uppercase letters? \n(Yes or No)`);
    //   upperConfirm = upperConfirm.toLowerCase();
  
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
    //   numberConfirm = numberConfirm.toLowerCase();
  
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
    //   synbolComfirm = synbolComfirm.toLowerCase();
  
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
  
// //   var characters = lower;
  var password = "";
  if (lowerConfirm && upperConfirm && numberConfirm && symbolConfirm){
    lower + upper + number + symbol;

  }else if (upperConfirm && numberConfirm && symbolConfirm){
    upper + number + symbol;
  
  }else if (upperConfirm && numberConfirm){
    upper + number;
  
  }else if (numberConfirm && symbolConfirm){
    number + symbol;
  
  }else if (upperConfirm && symbolConfirm){
    upper + symbol;
  
  }else if (upperConfirm){
    lower + upper;
  
  }else if(numberConfirm){
    lower + number;
  
  }else if (symbolConfirm){
    lower + symbol;
  
  }
  
    for(var i = 0; i < usersLength; i++){
      password.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    return password;
  }
  
//   // Input Generated
  function inputPassword() {
    var result = "";
    result = passwordGen();
    var passwordResult = document.querySelector(`#password`);
    passwordResult.value = result;
  }
  
  function reset(){
    document.getElementById(`password`).value = `Your Secure Password`;
  }
  

button.addEventListener(`click`, inputPassword);





// DOM Elements

// const randomFunction = {
//  lower: getRandomLower,
//  upper: getRandomUpper,
//  number: getRandomNumber,
//  symbol: getRandomSymbol
// };

// const resultEl = document.getElementById("password");


// Generator Function

// function getRandomLower(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper(){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }    

// function getRandomNumber(){
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// } 

// function getRandomSymbol(){
//     const symbols = `~!@#$%^&*()_+-={}[]\/?<>.,|;:'"`;
//     return symbols[Math.floor(Math.random() * symbols.length)];
// } 

