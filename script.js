
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
        //! make a random number generator
        //! if charset selected push 1 random character to password array and push whole set to a generator array
        // repeat random number generator ( and use on generator array) to the value of passwordLength - passwordarray.length
        //shuffle the array, then join - you should have your password




// Following variables need to be global
var passwordArray = []; // contains one, randomly generated, of each confirm-selected charset
var passwordArrayB = []; // contains whole array from each confirm-selected charset
var passwordLength = 0;
// const generatedPassword = []; 

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr);
}

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = parseInt(prompt('How long would you like your password? (min 8 - max 128 characters)'));
  if (passwordLength > 7 && passwordLength < 129) {
    alert(`You have chosen ${passwordLength} as your password length`)
  } else {
    alert(`input was not found within this range, please try again.`)
    getPasswordOptions()
  }
  function getCharOptions() {
    var confirmLowerCase = confirm(`Would you like lowercase letters?`);
    if (confirmLowerCase === true) {
      passwordArray.push(lowerCasedCharacters[getRandom((lowerCasedCharacters.length)-1)]);
      passwordArrayB.push.apply(passwordArrayB, lowerCasedCharacters);
      // console.log(passwordArray);
      // console.log(passwordArrayB);
    };
    var confirmUpperCase = confirm(`Would you like uppercase letters?`);
    if (confirmUpperCase === true) {
      passwordArray.push(upperCasedCharacters[getRandom((upperCasedCharacters.length)-1)]);
      passwordArrayB.push.apply(passwordArrayB, upperCasedCharacters);
      // console.log(passwordArray);
      // console.log(passwordArrayB);
    };
    var confirmNumeric = confirm(`Would you like numbers?`);
    if (confirmNumeric === true) {
      passwordArray.push(numericCharacters[getRandom((numericCharacters.length)-1)]);
      passwordArrayB.push.apply(passwordArrayB, numericCharacters);
      // console.log(passwordArray);
      // console.log(passwordArrayB)
    };
    var confirmSpecialChar = confirm(`Would you like special characters? (@%+\\/'!#$^?:,)}{][~-_.)`);
    if (confirmSpecialChar === true) {
      passwordArray.push(specialCharacters[getRandom((specialCharacters.length)-1)]);
      passwordArrayB.push.apply(passwordArrayB, specialCharacters);
      // console.log(passwordArray);
      // console.log(passwordArrayB);
      };


    if (confirmLowerCase === false
      && confirmUpperCase === false
      && confirmNumeric === false
      && confirmSpecialChar === false) {
        alert(`at least one character type must be selected`)
        getCharOptions()
    } else {
      alert(`Thank you, we are now generating your password...`)
    }
  }
  getCharOptions()
}
getPasswordOptions();







//  Function to generate password with user input
function generatePassword() {
console.log(passwordArray);
console.log(passwordArrayB);

// number of randomly selected characters from passwordArrayB needed = passwordLength-passwordArray.length
for (let i=0; i=(passwordLength-(passwordArray.length)); i++) {
  passwordArray.push(passwordArrayB[getRandom(i)]);
}

console.log(passwordArray);
  // console.log(passwordArrayB);
}
generatePassword()

//  Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

//  Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
  
//   passwordText.value = password;
// }

//  Add event listener to generate button
// generateBtn.addEventListener('click', writePassword)