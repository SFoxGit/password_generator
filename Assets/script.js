// Assignment Code
var generateBtn = document.querySelector("#generate");
var charCount = "";
var lowerP = "";
var upperP = "";
var numericP = "";
var specialP = "";
var yankee = ["Y", "N"];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "";
var numericChar = "0123456789";
var lengthP = 0;

generateBtn.addEventListener("click", promLength);

function promLength() {
    lengthP = prompt("How long would you like your password to be? Please select a number between 8 and 128.");
    if (lengthP >= 8 && lengthP <= 128){
      return promLower()
    } else {
      alert("Password length MUST be between 8 and 128.")
      return promLength()
    }
}

function promLower() {
    lowerP = prompt("Would you like lowercase letters? Please answer Y for Yes, or N for No");
    lowerP = lowerP.toUpperCase();
    if (yankee.includes(lowerP)) {
      return promUpper()
    } else {
      alert("Please use Y or N only")
      return promLower()
    }
}

function promUpper() {
    upperP = prompt("Would you like uppercase LETTERS? Please answer Y for Yes, or N for No");
    upperP = upperP.toUpperCase();
    if (yankee.includes(upperP)) {
      return promNumeric()
    } else {
      alert("Please use Y or N only")
      return promUpper()
    }
}

function promNumeric() {
    numericP = prompt("Would you like numeric values? Please answer Y for Yes, or N for No");
    numericP = numericP.toUpperCase();
    if (yankee.includes(numericP)) {
      return promSpecial()
    } else {
      alert("Please use Y or N only")
      return promNumeric()
    }
}

function promSpecial() {
    specialP = prompt("Would you like to use special characters? Please answer Y for Yes, or N for No");
    specialP = specialP.toUpperCase();
    if (yankee.includes(specialP)) {
      return generatePassword()
    } else {
      alert("Please answer Y or N only")
      return promSpecial()
    }
}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
