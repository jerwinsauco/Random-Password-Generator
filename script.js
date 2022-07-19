
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

  //Need to debug this. Should only accept numeric entry. No letters/words
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

    //All Options
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
    console.log(selection)
  for (var i = 0; i < length; i++){
    //pick a random index number from selection string
    var charIndex = Math.floor(Math.random() * selection.length)
    //add the random char acter to password string
     password += selection.charAt(charIndex) 
  };

  };

  // if (lowerCase && upperCase && number && specialCharacter) {
  // selection = character.concat(number, letters, lettersUp);
  //}

  //Three Options
  // else if (number && specialCharacter && upperCase) {
  //   selection = character.concat(number, lettersUp);
  // } else if (specialCharacter && upperCase && lowerCase) {
  //   selection = character.concat(letters, lettersUp);
  // } else if (upperCase && lowerCase && number) {
  //   selection = lettersUp.concat(letters, number);
  // } else if (lowerCase && number && specialCharacter) {
  //   selection = letters.concat(number, character);
  // } 

  //Two Options
  // else if (specialCharacter && number) {
  //   selection = character.concat(number);
  // } else if (number && upperCase) {
  //   selection = number.concat(lettersUp);
  // } else if (upperCase && lowerCase) {
  //   selection = lettersUp.concat(letters);
  // } else if (lowerCase && number) {
  //   selection = letters.concat(number);
  // } else if (lowerCase && specialCharacter) {
  //   selection = letters.concat(character);
  // } else if (specialCharacter && upperCase) {
  //   selection = character.concat(lettersUp);
  // }

  // //One Option
  // else if (specialCharacter) {
  //   selection = character;
  // } else if (number) {
  //   selection = number;
  // } else if (lowerCase) {
  //   selection = letters;
  // } else if (upperCase) {
  //   selection = lettersUp;
  // };

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);