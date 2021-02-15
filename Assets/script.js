// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCount = "";
var lowerCase = true;
var upperCase = true;
var numericY = true;
var specialChar = true;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
