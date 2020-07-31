// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var passwordChar = prompt("How many characters would you like your password to contain?");
var specialChar = confirm("Click ok to confirm special characters");
var numChar = confirm("Click ok to confirm numeric characters");
var lowerChar = confirm("Click ok to confirm lowercase characters");
var upperChar = confirm("Click ok to confirm uppercase characters");
