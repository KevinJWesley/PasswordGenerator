// Assignment Code

//when i click the button i am presented with a series of prompts

function userPrompt() {
  var characterAmount = prompt(
    "How many characters would you like in your password?"
  );
  if (characterAmount < 8 || characterAmount > 128) {
    alert("Please Choose a length of password between 8 and 128 characters.");
  } else {
    var specialCharacters = confirm(
      "Would You Like to Add Lowerscase Letters?"
    );
    var specialCharacters = confirm("Would you like to Add Uppercase Letters?");
    var specialCharacters = confirm("Woud You Like to Add Numbers?");
    var specialCharacters = confirm(
      "Would You Like Your Password To Contain Special Characters?"
    );
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", characterPrompt);
