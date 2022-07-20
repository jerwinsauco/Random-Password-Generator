
// Assignment Code
var length;
var lowerCase;
var upperCase;
var number;
var specialCharacter;
var selection = "";
var password= "";

const characters = ["number", "letters", "lettersUp", "character"];

var numberChar = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*)()";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  length = prompt("Password Length Needed: min (8) to max (128).");
  if (!length) {
    alert("No input entered! Goodbye");
  }

  else if (isNaN(length)) {
    alert("Use Numeric Number ONLY!");
  }

  else if (length < 8 || length > 128) {
    length = prompt("Password must be from 8 to 128 in length.")
  }

  else {
    lowerCase = confirm("Include lowercase letters? Press OK if Yes. Cancel if No.");
    upperCase = confirm("Include uppercase letters? Press OK if Yes. Cancel if No.");
    numberConfirm = confirm("Include numeric in your new password? Press OK if Yes. Cancel if No.");
    specialCharacter = confirm("Include special characters in your new password? Press OK if Yes. Cancel if No.");

    if (lowerCase) {
      selection += letters;
    }
    if (upperCase) {
      selection += lettersUp;
    }
    if (numberConfirm) {
      selection += numberChar;
    } 
    if(specialCharacter) {
      selection += specialChars;
    }

    for (var i = 0; i < length; i++){
      //pick a random index number from selection string
      var charIndex = Math.floor(Math.random() * selection.length)
      //add the random character to password string
      password += selection.charAt(charIndex) 
    };

  };

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);