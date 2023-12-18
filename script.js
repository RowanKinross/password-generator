
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
        // make a random number generator
        // if charset selected push 1 random character to password array and push whole set to a generator array
        // repeat random number generator ( and use on generator array) to the value of passwordLength - passwordarray.length
        //shuffle the array, then join - you should have your password




// Following variables need to be global
var passwordArray = [];
var passwordArrayB = [];

// const generatedPassword = []; 
// function to get random integers, then to get random characters
// Function for getting a random element from an array
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var getRandomLC = lowerCasedCharacters[getRandomInt((lowerCasedCharacters.length)-1)];
console.log(getRandomLC);
var getRandomUC = upperCasedCharacters[getRandomInt((upperCasedCharacters.length)-1)];
console.log(getRandomUC);
var getRandomNum = numericCharacters[getRandomInt((numericCharacters.length)-1)];
console.log(getRandomNum);
var getRandomSC = specialCharacters[getRandomInt((specialCharacters.length)-1)];
console.log(getRandomSC);

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('How long would you like your password? (min 8 - max 128 characters)'));
  if (passwordLength > 7 && passwordLength < 129) {
    alert(`You have chosen ${passwordLength} as your password length`)
  } else {
    alert(`input was not found within this range, please try again.`)
    getPasswordOptions()
  }
  function getCharOptions() {
    var confirmLowerCase = confirm(`Would you like lowercase letters?`);
    if (confirmLowerCase === true) {
      passwordArray.push(getRandomLC);
      passwordArrayB.push.apply(passwordArrayB, lowerCasedCharacters);
      console.log(passwordArray);
      console.log(passwordArrayB);
    };
    var confirmUpperCase = confirm(`Would you like uppercase letters?`);
    if (confirmUpperCase === true) {
      passwordArray.push(getRandomUC);
      passwordArrayB.push.apply(passwordArrayB, upperCasedCharacters);
      console.log(passwordArray);
      console.log(passwordArrayB);
    };
    var confirmNumeric = confirm(`Would you like numbers?`);
    if (confirmNumeric === true) {
      passwordArray.push(getRandomNum);
      passwordArrayB.push.apply(passwordArrayB, numericCharacters);
      console.log(passwordArray);
      console.log(passwordArrayB)
    };
    var confirmSpecialChar = confirm(`Would you like special characters? (@%+\\/'!#$^?:,)}{][~-_.)`);
    if (confirmSpecialChar === true) {
      passwordArray.push(getRandomSC);
      passwordArrayB.push.apply(passwordArrayB, specialCharacters);
      console.log(passwordArray);
      console.log(passwordArrayB);
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





// function arrayPush() {   
//   if (getPasswordOptions.confirmLowerCase === true) {
//   console.log("lower case is true")
//   } else {
//   console.log("confirm lower case is not true")
//   }
// }
// arrayPush();


// first get one character from each getCharOptions if true
// function getPasswordArray() {
//     if (getPasswordOptions.confirmLowercase === true) {
//       passwordArray = passwordArray.push(lowerCasedCharacters[getRandomInt((lowerCasedCharacters.length)-1)]);
//     } else {
//       passwordArray = passwordArray;
//     }
//     console.log(passwordArray);
// }
// getPasswordArray();
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
// generateBtn.addEventListener('click', writePassword)