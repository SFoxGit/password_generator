// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCount = "";
var lowerP = true;
var upperP = true;
var numericP = true;
var specialP = true;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "";
var numericChar = "0123456789";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
