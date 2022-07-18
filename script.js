
// Assignment Code
var length;
var lowerCase;
var upperCase;
var number;
var specialCharacter;
var selection;
var lettersUp

const characters = ["number", "letters", "lettersUp", "character"];

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
  length = prompt("Enter Length of Password: min (8) to max (128). Numeric entry only accepted.");
  if (!length) {
    alert("No input entered! Goodbye");
  }
  
  //Need to debug this. Should only accept numeric entry. No letters/words
  else if (length = letters) {
    alert("Use Numeric Number ONLY!");
  }

  else if (length<8 || length>128) {
    length = prompt ("Password must be from 8 to 128 in length.")
  }
  else {
    lowerCase = confirm("Include lowercase letters? Press OK if Yes. Cancel if No.");
    upperCase = confirm("Include uppercase letters? Press OK if Yes. Cancel if No.");
    number = confirm("Include numeric in your new password? Press OK if Yes. Cancel if No.");
    specialCharacter = confirm("Include special characters in your new password? Press OK if Yes. Cancel if No.");
  };

  //All Options
  if (lowerCase && upperCase && number && specialCharacter) {
    selection = character.concat(number, letters, lettersUp);
  }

  //Three Options
  else if (number && specialCharacter && upperCase) {
    selection = character.concat(number, lettersUp);
  } else if (specialCharacter && upperCase && lowerCase) {
    selection = character.concat(letters, lettersUp);
  } else if (upperCase && lowerCase && number) {
    selection = lettersUp.concat(letters, number);
  } else if (lowerCase && number && specialCharacter) {
    selection = letters.concat(number, character);
  } 

  //Two Options
  else if (specialCharacter && number) {
    selection = character.concat(number);
  } else if (number && upperCase) {
    selection = number.concat(lettersUp);
  } else if (upperCase && lowerCase) {
    selection = lettersUp.concat(letters);
  } else if (lowerCase && number) {
    selection = letters.concat(number);
  } else if (lowerCase && specialCharacter) {
    selection = letters.concat(character);
  } else if (specialCharacter && upperCase) {
    selection = character.concat(lettersUp);
  }

  //One Option
  else if (specialCharacter) {
    selection = character;
  } else if (number) {
    selection = number;
  } else if (lowerCase) {
    selection = letters;
  } else if (upperCase) {
    selection = lettersUp;
  };

  return selection;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);