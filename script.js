
// Assignment Code
var length;
var lowerCase;
var upperCase;
var number;
var specialCharacter;
var selection;
var lettersUp

const characters = ["number", "letters", "character"];

number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*)()";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  length = prompt("Enter Length of Character: min (8) to max (128)");
  if (!length) {
    alert("Invalid Entry! Enter Desired Password Length");
  }
  else if (length < 8 || length > 128) {
    length = prompt ("Password must be from 8-128 in length.")
  }
  else {
    lowerCase = confirm("Include lowercase letters?");
    upperCase = confirm("Include uppercase letters?");
    number = confirm("Include numeric in your new password?");
    specialCharacter = confirm("Include special characters in your new password?");
  };
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);