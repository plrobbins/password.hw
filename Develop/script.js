// Assignment Code
var generateBtn = document.querySelector("#generate");
//Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "~", "{", "}"];
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];





// Add event listener to generate button

  generateBtn.addEventListener("click", writePassword);
//Confirm the number of password characters
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));
  while(passwordLength <= 8 || passwordLength >= 128) {
    alert("Password length must be between 8-128 characters.");
    var passwordLength = (prompt("How many characters would you like your password to contain?"));
  }


//confirm special characters in the password
var specialChar = confirm("Click ok to confirm special characters");
//confirm numeric characters in the password
var numChar = confirm("Click ok to confirm numeric characters");
//confirm lowercase characters in the password
var lowerChar = confirm("Click ok to confirm lowercase characters");
//confirm uppercase characters in the password
var upperChar = confirm("Click ok to confirm uppercase characters");
//creating a loop
while(specialChar === false && numChar === false && lowerChar === false && upperChar === false) {
  alert("You have to choose at least one parameter");
  var specialChar = confirm("Click ok to confirm special characters");
  var numChar = confirm("Click ok to confirm numeric characters");
  var lowerChar = confirm("Click ok to confirm lowercase characters");
  var upperChar = confirm("Click ok to confirm uppercase characters");
}
//Password parameters
var passwordChar = []
if (specialChar) {
  passwordChar = passwordChar.concat(specialCharacters);
}
if (numChar) {
  passwordChar = passwordChar.concat(number);
}
if (lowerChar) {
  passwordChar = passwordChar.concat(lowerCharacters);
}
if (upperChar) {
  passwordChar = passwordChar.concat(upperCharacters);
}

console.log(passwordChar);

//Looping to generate the randon password
var randomPassword = ""

for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  console.log(randomPassword);
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}