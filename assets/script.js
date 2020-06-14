// Assignment Code
//links to button in html, id = "generate" 
var generateBtn = document.querySelector('#generate');
// var textArea = document.querySelector('#password');

//create criteria for password based on user input
function generatePassword() {

  //asks user how long they would like the pw to be, value of pw
  var passwordLength = prompt('How long would you like your password to be? Choose a length between 8 and 128 characters.');
  /*asks user if they want the following characters--
  --will need t/f
  --will need to save value later to compile password
  */
  if (passwordLength <= 7 || passwordLength >= 129) {
    alert('You did not meet the criteria');
    passwordLength();
  }
  var useUpperCase = confirm('Would you like to use upper case letters?');
  var useLowerCase = confirm('Would you like to use lower case letters?');
  var useNumbers = confirm('Would you like to use numbers?');
  var useSymbols = confirm('Would you like to use symbols?');


  //characters to choose from, needs a function
  const chooseCharacter = {
    upperCase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
    lowerCase: ['abcdefghijklmnopqrstuvwxyz'],
    numbersUsed: ['1234567890'], //use math.floor(math.random)
    //not sure if all symbols allowed
    symbols: ['!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~'],
  }

  var useChar = '';

  // while (passwordLength <=7 || passwordLength >= 129) {


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
    for (i = 0; i <= passwordLength; i++) {
      password += useChar.charAt(Math.floor(Math.random() * Math.floor(useChar.length - 1)));
    }
    return password;

  }
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = password.replace('[object HTMLTextAreaElement]', '');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//when I press button, a prompt opens
//the prompt asks me to set my pw length, have to save the user input
//if below or above, then alert
//prompts each asking if upper, lower, number, symbols char used
//take that data length and char and generate a random password
//old pw has to clear when i generate a new one



