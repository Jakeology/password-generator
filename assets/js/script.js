// Assignment code here
var specialChar = ['@','%','+','/','!','#','$','^','?',')','(','}','{',']','[','~','-','_','.'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasedChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPassLength() {

  var getPasswordLength = window.prompt("How many characters would you like your password? (8-128)");

  if (getPasswordLength === null) {
    return;
  }

  if(!isNaN(getPasswordLength)) {
    if(getPasswordLength >= 8 && getPasswordLength <= 128) {
      return getPasswordLength;
    } else {
      window.alert("You have choosen a password that does not meets the requirements");
      return getPassLength();
    }
  } else {
    window.alert("Invalid input. Please put a valid number between 8-128");
    return getPassLength();
  }
}

var allPasswordCharacters;

function getPasswordCharacters() {

  allPasswordCharacters = [];

  var promptLowercasedChar = window.confirm("Would you like your password to have lowercased letters? (Ok = YES | Cancel = NO)");

  if(promptLowercasedChar) {
    for(var i = 0; i < lowercasedChar.length; i++){
      allPasswordCharacters.push(lowercasedChar[i]);
    }
  }

  var promptUppercasedChar = window.confirm("Would you like your password to have uppercased letters? (Ok = YES | Cancel = NO)");

  if(promptUppercasedChar) {
    for(var i = 0; i < uppercasedChar.length; i++){
      allPasswordCharacters.push(uppercasedChar[i]);
    }
  }

  var promptNumericChar = window.confirm("Would you like your password to have numbers? (Ok = YES | Cancel = NO)");

  if(promptNumericChar) {
    for(var i = 0; i < numericChar.length; i++){
      allPasswordCharacters.push(numericChar[i]);
    }
  }

  var promptSpecialChar = window.confirm("Would you like your password to have special characters? (Ok = YES | Cancel = NO)");

  if(promptSpecialChar) {
    for(var i = 0; i < specialChar.length; i++){
      allPasswordCharacters.push(specialChar[i]);
    }
  }
}

function generatePassword() {
  var getPasswordLength = getPassLength();

    getPasswordCharacters();

    var password = "";

    for(var i = 0; i < getPasswordLength; i++) {
      var getRandomChar = Math.floor(Math.random() * allPasswordCharacters.length);
      password += allPasswordCharacters[getRandomChar];
      console.log(getRandomChar);
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
