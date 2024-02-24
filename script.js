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

function generatePassword(){
  var length = 0;
  do{
    var password = "";
    var input = prompt("How long would you like your password to be? Please enter a number between 8 and 128");
    if(input>128||input<8||isNaN(input)){
      alert("That is not a valid input. Please try again");
    }else{
      length = input;
    }
  }while(length === 0);
  var charSet = "";
  do{
    charSet = checkCharSet();
  }while(charSet === "");
  for (let index = 0; index < length; index++) {
    var random = Math.floor(Math.random()*charSet.length);
    password+=charSet.charAt(random);
  }
  return password;
}

function checkCharSet(){
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
  if(confirm("Would you like your password to include special characters?")){
    output+="!#$%&()*+=-_.,;:<>@?[]\\^`{}|~";
  }
  if(output === ""){
    alert("Please choose at least one set of characters to include in your password.")
  }
  return output;
}