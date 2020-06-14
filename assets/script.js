// Assignment Code
//links to html
var generateBtn = document.querySelector('#generate');
var textArea = document.querySelector('#password');

//create criteria for password based on user input
function generatePassword() {

  //asks user how long they would like the pw to be, value of pw
  var passwordLength = prompt('How long would you like your password to be? Choose a length between 8 and 128 characters.');
  //checks if criteria is correct, if not returns an alert
  if (passwordLength <= 7 || passwordLength >= 129) {
    alert('You did not meet the criteria');
    passwordLength();
  }
  //generates user criteria
  var useUpperCase = confirm('Would you like to use upper case letters?');
  var useLowerCase = confirm('Would you like to use lower case letters?');
  var useNumbers = confirm('Would you like to use numbers?');
  var useSymbols = confirm('Would you like to use symbols?');


  //characters to choose from
  const chooseCharacter = {
    upperCase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    lowerCase: ['abcdefghijklmnopqrstuvwxyz'],
    numbersUsed: ['1234567890'], //use math.floor(math.random)
    //not sure if all symbols allowed
    symbols: ['!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~'],
  }
  //var to use below
  var useChar = '';
  //if correct password length given, and true/false for criteria
  if (passwordLength >= 8 && passwordLength <= 128) {

    if (useUpperCase) {
      useChar += chooseCharacter.upperCase;

    }
    if (useLowerCase) {
      useChar += chooseCharacter.lowerCase;
    }
    if (useNumbers) {
      useChar += chooseCharacter.numbersUsed;

    }
    if (useSymbols) {
      useChar += chooseCharacter.symbols;
    }
    //selects random characters of chosen length of password
    for (i = 0; i <= passwordLength - 1; i++) {
      password += useChar.charAt(Math.floor(Math.random() * Math.floor(useChar.length - 1)));
    }
    return password;

  }
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //not sure why this popped up in field but clears it
  password = password.replace('[object HTMLTextAreaElement]', '');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//clears password input field
function clearField() {
  password = password.replace(password, "");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", clearField);



