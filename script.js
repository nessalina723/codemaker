// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordlength = prompt("what is the length of the password?") 
  var lowerconfirm  = confirm ("would you like lowercase?")
  var upperconfirm = confirm ("would you like uppercase?")
  var numberconfirm = confirm ("would you like numbers?")
  var specialconfirm = confirm ("would you like special characters?")
  console.log(passwordlength,lowerconfirm,upperconfirm,numberconfirm,specialconfirm)

}
// Write password to the #
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
