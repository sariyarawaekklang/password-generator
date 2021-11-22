// Assignment code here

// Variables
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var both = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var specialChar = "~`!@#$%^&*()_-+={}[]\|;:,<.>/?";
var passwordLength;
var lettering;
var numbers;
var special;

// Asks the user the length of the password
function determineLength() {
  passwordLength = window.prompt("Choose your password's character length. Please provide a number between 8 and 128.");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    window.alert("Error. Try again");
    return determineLength();
  } else if (passwordLength < 8) {
    window.alert("Error. Try again");
    return determineLength();
  } else if (passwordLength > 128) {
    window.alert("Error. Try again");
    return determineLength();
  } else {
    return determineLettering();
  }
}



// Ask the user whether he/she wants to include uppercase or lowercase letters, or both
function determineLettering() {
  lettering = window.prompt("Would you like your password to use uppercase letters, lowercase letters, or both? Please enter 'UPPERCASE', 'LOWERCASE', or 'BOTH' to make a choice.");
  lettering = lowercase, uppercase, both;

  if (isNaN (lettering)) {
    window.alert = ("Error. Try again.");
    determineLettering();

  } else if (lettering === "uppercase" || lettering === "UPPERCASE") {
    return determineNumbers;

  } else if (lettering === "lowercase" || lettering === "LOWERCASE") {
    return determineNumbers;

  } else if (lettering === "both" || lettering === "BOTH") {
    return determineNumbers;
  }
}

// Ask the user whether he/she wants to include numbers
function determineNumbers() {
  numbers = window.prompt("Would you like to include numbers in your password? Please enter 'YES' or 'NO'.");
  

  if (isNaN (numbers)) {
    window.alert = ("Error. Try again.");
    return determineNumbers();

  } else if (numbers === "yes" || numbers === "YES" ) {
    return determineSpecial;

  } else if (numbers === "no" || numbers === "NO") {
    return determineSpecial;
  }
}

// Ask the user whether he/she wants to include special characters
function determineSpecial() {
  special = window.prompt("Would you like to include special characters in your password? Please enter 'YES' or 'NO'.");

  if (isNaN (special)) {
    window.alert = ("Error. Try again.");
    return determineSpecial();

  } else if (special === "yes" || special === "YES" ) {
    return generatePassword;

  } else if (special === "no" || special === "NO") {
    return generatePassword;
  }
}


// Generate the password
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineLettering();
  console.log(lettering);
  determineNumbers();
  console.log(numbers);
  determineSpecial();
  console.log(special);

var tempPass = "";
var password = "";
if (lettering && numbers && special) {
  tempPass += both + number + specialChar;

} else if (lettering && numbers && special) {
  tempPass += uppercase + number + specialChar;

} else if (lettering && numbers && special) {
  tempPass += lowercase + number + specialChar;

} else if (lettering && numbers) {
  tempPass += both + number;

} else if (lettering && numbers) {
  tempPass += uppercase + number;

} else if (lettering && numbers) {
  tempPass += lowercase + number;

} else if (numbers && special) {
  tempPass += number + specialChar;

} else if (lettering && special) {
  tempPass += both + specialChar;

} else if (lettering && special) {
  tempPass += uppercase + specialChar;

} else if (lettering && special) {
  tempPass += lowercase + specialChar;

} else if (lettering) {
  tempPass += both;

} else if (lettering) {
  tempPass += uppercase;

} else if (lettering) {
  tempPass += lowercase;

} else if (numbers) {
  tempPass += number;

} else if (special) {
  tempPass += specialChar;
}

  for(var i = 0; i < passwordLength; i++) {
    password += tempPass.charAT(Math.floor(Math.random() * tempPass.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);