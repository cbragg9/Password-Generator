function generatePassword() {
   
  //  Prompt to set password length
  var passLength = parseInt(prompt("How many characters in your password (min: 8, max: 128)"));

  //  Repeat question if length or data type is unacceptable
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please select a number between 8 and 128"); 
    passLength = parseInt(prompt("How many characters in your password (min: 8, max: 128)"));
  }

  // Boolean variables that will filter out certain characters
  var lowercase = confirm("Do you want LOWER case letters in your password?");
  var uppercase = confirm("Do you want UPPER case letters in your password?");
  var numbers = confirm("Do you want NUMBERS in your password?");
  var special = confirm("Do you want SPECIAL CHARACTERS in your password?");

  // Return error message if all values are false
  if (lowercase === false && uppercase === false && numbers === false && special === false) {
    final = "Cannot Create Password";
    return final;
  }

  // Define all unique possible characters in a variable
  var randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomLower = "abcdefghijklmnopqrstuvwxyz";
  var randomNumber = "1234567890";
  var randomSpecial = "!@#$%^&*()";

  // Getting unique uppercase from a function 
  function generateUpper() {
    return randomUpper.charAt(Math.floor(Math.random() * randomUpper.length));
  }

  // Getting unique lowercase from a function 
  function generateLower() {
    return randomLower.charAt(Math.floor(Math.random() * randomLower.length));
  }

  // Getting unique number from a function 
  function generateNumber() {  
    return randomNumber.charAt(Math.floor(Math.random() * randomNumber.length));
  }

  // Getting unique special character from a function 
  function generateSpecial() {    
    return randomSpecial.charAt(Math.floor(Math.random() * randomSpecial.length));
  }

  // Getting a unique character from one of the four functions above
  function generateUnique() {
    var unique = [generateUpper(), generateLower(), generateNumber(), generateSpecial()];
    return unique[Math.floor(Math.random() * 4)];
  }

  //  Set empty final password variable
  var final = "";

  // Add one unique character to final variable up to the password length
  for (var i = 0; i < passLength; i++) {
    var addCharacter = generateUnique();

    // Create new character if generateUnique returns a value that was requested to be filtered out 
    while (
      (lowercase === false && randomLower.indexOf(addCharacter) !== -1) || 
      (uppercase === false && randomUpper.indexOf(addCharacter) !== -1) ||
      (numbers === false && randomNumber.indexOf(addCharacter) !== -1) ||
      (special === false && randomSpecial.indexOf(addCharacter) !== -1)
      ) {
      var addCharacter = generateUnique();
    }

    final = final + addCharacter;
  }
  
  return final;
}



//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
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
