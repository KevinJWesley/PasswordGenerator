// Assignment Code

var characters = {
  lower: "abcdefghijklmnop",
  upper: "abcdefghijklmnop",
  num: "0123456789",
  special: "!@#$%^",
};

function userPrompt() {
  var characterAmount = prompt(
    "How many characters would you like in your password?"
  );

  if (characterAmount < 8 || characterAmount > 128) {
    alert("Please Choose a length of password between 8 and 128 characters.");
  } else {
    var lowercase = confirm("Would You Like to Add Lowerscase Letters?");
    var uppercase = confirm("Would you like to Add Uppercase Letters?");
    var numbers = confirm("Woud You Like to Add Numbers?");
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
generateBtn.addEventListener("click", userPrompt);
