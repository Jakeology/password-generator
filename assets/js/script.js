// Assignment code here
var specialChar = ['@','%','+','/','!','#','$','^','?',')','(','}','{',']','[','~','-','_','.'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasedChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function to get the users specified password length
function getPasswordLength() {

  var passwordLength = parseInt(window.prompt("How many characters would you like your password? (8-128)"));

  if(passwordLength === null) {
    return;
  }

  if(isNaN(passwordLength)) {
    window.alert("You need to enter a valid number between 8 and 128.");
    return getPasswordLength();
  }

  if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Your pasword length needs to be between 8 and 128 characters.");
    return getPasswordLength();
  }

  return passwordLength;

}

//Function to get the characters used in the password specified by the user
function getPasswordCharacters() {
  var characterOptions = [];

  var promptLowercasedChar = window.confirm("Would you like your password to have lowercased letters? (Ok = YES | Cancel = NO)");

  if(promptLowercasedChar) {
    characterOptions.push(lowercasedChar);
  }

  var promptUppercasedChar = window.confirm("Would you like your password to have uppercased letters? (Ok = YES | Cancel = NO)");

  if(promptUppercasedChar) {
    characterOptions.push(uppercasedChar);
  }

  var promptNumericChar = window.confirm("Would you like your password to have numbers? (Ok = YES | Cancel = NO)");

  if(promptNumericChar) {
    characterOptions.push(numericChar);
  }

  var promptSpecialChar = window.confirm("Would you like your password to have special characters? (Ok = YES | Cancel = NO)");

  if(promptSpecialChar) {
    characterOptions.push(specialChar);
  }

  if(!characterOptions.length) {
    window.alert("You need to select at lease one character option.");
    return getPasswordCharacters();
  }
  
  var allPasswordCharacters = [];

  for(var x = 0; x < characterOptions.length; x++) {
    var getCharaterOption = characterOptions[x];
    for(var y = 0; y < getCharaterOption.length; y++){
      allPasswordCharacters.push(getCharaterOption[y]);
    }
  }

  return allPasswordCharacters;

}

//Function to generate the password
function generatePassword() {
  var passwordLength = getPasswordLength();

    if(passwordLength === undefined) {
      return;
    }

    var allPasswordCharacters = getPasswordCharacters();

    var password = "";

      for(var i = 0; i < passwordLength; i++) {
        var getRandomChar = Math.floor(Math.random() * allPasswordCharacters.length);
        password += allPasswordCharacters[getRandomChar];
      }

    return password;
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    if(password === undefined) {
      return;
    }

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
