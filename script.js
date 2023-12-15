
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//Task:  Generate a password when the button is clicked
  // 1. Present a series of prompts for password criteria
      //! - Length of password: at least 8 characters but no more than 128.
      //!prompt - how long would you like the password? (min 8 - max 128 characters)
          //!if number/input not within this range alert: the number you typed was not within this range, please try again.
      //! - Character types: Lowercase, Uppercase, Numeric, Special characters ($@%&*, etc)
        //! confirm do you at least 1 want lowercase letter?
        //! confirm do you at least 1 want uppercase letter?
        //! confirm do you at least 1 want number?
        //! confirm do you at least 1 want special character? (  @ % + \\ / ' ! # $ ^ ? : , ) } { ] [ ~ - _ .   )
  //! 2. Code should validate for each input and at least one character type should be selected
        //! alert:if you don't select any character types, we can't generate you a password. Try again.
  // 3. Once prompts are answered then the password should be generated and displayed in an alert or written to the page
        // repeat arrays so that there is minimum 128 characters in each - make the new arrays into variable
        // evenly distribute password length into the character types, add any remainder to lowercase
        // make a random number generator
        
        // use random number generator to find "evenlyDistrubute" values to be used as indices in the subsequent arrays
        // create new array with all values collected
        //shuffle the array, then join - you should have your password



        
// Following variables need to be global
// const charOptions = [];
// const generatedPassword = []; 

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('How log would you like your password? (min 8 - max 128 characters)'));
  if (passwordLength > 7 && passwordLength < 129) {
    alert(`You have chosen ${passwordLength} as your password length`)
  } else {
    alert(`input was not found within this range, please try again.`)
    getPasswordOptions()
  }
  function getCharacterOptions() {
    var confirmLowercase = confirm(`Would you like lowercase letters?`);
    var confirmUppercase = confirm(`Would you like uppercase letters?`);
    var confirmNumeric = confirm(`Would you like numbers?`);
    var confirmSpecialChar = confirm(`Would you like special characters? (@%+\\/'!#$^?:,)}{][~-_.)`);
    if (confirmLowercase === false
      && confirmUppercase === false
      && confirmNumeric === false
      && confirmSpecialChar === false) {
        alert(`at least one character type must be selected`)
        getCharacterOptions()
    } else {
      alert(`Thank you, we are now generating your password...`)
    }
  }
  getCharacterOptions()
}
getPasswordOptions();



// Function for getting a random element from an array
// function getRandom(arr) {

// }

//  Function to generate password with user input
// function generatePassword() {

// }

//  Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

//  Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
  
//   passwordText.value = password;
// }

//  Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);