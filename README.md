# 03 JavaScript: Password Generator

Generate a password when a user submits the "Generate Password" button.  
Prompt the user to choose number of characters between 8 to 128.  
Keep prompting the user if the value is not between 8 to 128.  
Prompt the user if they want lower case letters, upper case letters, numbers, or special characters.  
Return an error message if all values are false since no characters are allowed.  
A different function was built to generate a random character from any type.  
A final function will generate a single character by running a random character function.  
If one of the characters match a type that was chosen False, generate a new character.  


## Description of latest commit:  
-Updated ReadMe to describe the project in my own words.


## Previous commit:  
-Expanded while loop to include uppercase, numbers, and special characters  
-Added If statement to return error message if all values are false, can't create a password  
-Moved variables outside of function to increase scope  
-Created Boolean variable for lowercase  
-Added while loop in for loop that creates final password var to generate new character if it matches a lowercase  


## Previous commit:  
-Added prompt to set password length  
-Added while loop to repeat question if length or data type is unacceptable  
-Added four functions to generate one type of characters (uppercase, lowercase, number, special)  
-Added one function to generate a random character from one of the four functions  
-Added final password var  
-Added for loop to add one unique character to final variable using function, up to password length


