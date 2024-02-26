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
// Get information from the user and generate a secure password
function generatePassword(){
  var length = 0;
  // Loops until the user has entered a valid number of characters for the password. Checks if the entered unit is a number and if it is within the valid range. If not, tells the user to enter a valid number and loops.
  do{
    var password = "";
    var input = prompt("How long would you like your password to be? Please enter a number between 8 and 128");
    if(input>128||input<8||isNaN(input)){
      alert("That is not a valid input. Please try again");
    }else{
      length = input;
    }
  }while(length === 0);
  // This variable holds the sum of all of the accepted character sets the user agrees to.
  var charSet = "";
  // Loops infinitely until the user says yes to at least one of the proposed sets of characters
  do{
    charSet = checkCharSet();
  }while(charSet === "");
  for (let index = 0; index < length; index++) {
    var random = Math.floor(Math.random()*charSet.length);
    password+=charSet.charAt(random);
  }
  return password;
}
// A series of confirm prompts to ask the user if they would like to opt into each individual character set. For clarity's sake I would have preferred to do this as check boxes on a form, but there is no built in functionality for prompts with multiple discreet options. I considered writing it such that the user entered a number 1-4 for each character set they wanted to opt into. That would have required fewer popup prompts but it would also have been very clunky in my opintion both to use and to code.
function checkCharSet(){
  // Asks the user whether or not they'd like to opt into any individual set of characters. If they say no to all of them it simply returns a blank string, but not before informing the user they'll have to choose at least one set of characters to generate a password from
  var output = "";
  if(confirm("Would you like your password to include uppper case letters?")){
    output+="ABDCEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(confirm("Would you like your password to include lower case letters?")){
    output+="abcdefghikjlmnopqrstuvwxyz";
  }
  if(confirm("Would you like your password to include numerical characters?")){
    output+="0123456798";
  }
  output+=prompt("Please list any other special characters you would like in your password.\n Suggestions: '!#$%&()*+=-_.,;:<>@?[]\\^`{}|~\"");
  if(output === ""){
    alert("Please choose at least one set of characters to include in your password.")
  }
  return output;
}