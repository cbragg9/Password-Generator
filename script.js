function generatePassword() {
   
  //  Prompt to set password length
  var passLength = parseInt(prompt("How many characters in your password (min: 8, max: 128)"));

  //  Repeat question if length or data type is unacceptable
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please select a number between 8 and 128"); 
    passLength = parseInt(prompt("How many characters in your password (min: 8, max: 128)"));
  }

  // Getting unique uppercase from a function 
  function generateUpper() {
    var randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return randomUpper.charAt(Math.floor(Math.random() * randomUpper.length));
  }

  // Getting unique lowercase from a function 
  function generateLower() {
    var randomLower = "abcdefghijklmnopqrstuvwxyz";
    return randomLower.charAt(Math.floor(Math.random() * randomLower.length));
  }

  // Getting unique number from a function 
  function generateNumber() {
    var randomNumber = "1234567890";
    return randomNumber.charAt(Math.floor(Math.random() * randomNumber.length));
  }

  // Getting unique special character from a function 
  function generateSpecial() {
    var randomSpecial = "!@#$%^&*()";
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
    final = final + generateUnique();
  }

  // TO DO: add options, filter out false values
  // var lowercase = confirm("Do you want LOWER case letters in your password?");
  // var uppercase = confirm("Do you want UPPER case letters in your password?");
  // var numbers = confirm("Do you want NUMBERS in your password?");
  // var special = confirm("Do you want SPECIAL CHARACTERS in your password?");


  // Different approach? Set password values
  // var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  //  Getting password values in a single Array
  //  console.log("Upper: " + values.charAt(Math.floor(Math.random() * 26)));
  //  console.log("Lower: " + values.charAt(Math.floor(Math.random() * 26) + 26));
  //  console.log("Number: " + values.charAt(Math.floor(Math.random() * 10) + 52));
  //  console.log("Special: " + values.charAt(Math.floor(Math.random() * 10) + 62));
  
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
