// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = ['a', 'b' ,'c' ,'d', 'e', 'f', 'g' ,'h', 'i' ,'j', 'k', 'l', 'm' ,'n' ,'o', 'p' ,'q', 'r', 's' ,'t' ,'u', 'v', 'w', 'x', 'y', 'z'];
var upperChar = [ 'A', 'B', 'C', 'D' ,'E', 'F', 'G', 'H' ,'I', 'J', 'K', 'L', 'M', 'N' ,'O', 'P', 'Q', 'R', 'S' ,'T' ,'U', 'V', 'W' ,'X', 'Y', 'Z'];
var num = ['0','1','2','3','4','5','6','7','8','9'];
var sym = ['!', '@' ,'#', '$', '%' ,'^' ,'&', '*' ,'=' ,'-' ,'_'];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function can be called to start process to generate password
function generatePassword() {

    var password = '';

    var passwordLength = 8;

  function promptLength() {
      passwordLength = prompt("Length of password (Must be between 8 to 128)", 8);

      if (passwordLength <8 || passwordLength > 128) {
        promptLength(); 
    }
  }

  //This sections prompts user for length of password and types of chacacters used
    promptLength();     
    var useUpper = confirm("do you want to use Upper case letters? (OK for yes - cancel for no )");
    var useLower = confirm("do you want to use lower case letters? (OK for yes - cancel for no )");
    var useNum = confirm("do you want to use numeric? (OK for yes - cancel for no )");
    var useSpecial = confirm("do you want to use special characters? (OK for yes - cancel for no )");
    var characters = [];


    //These if statements add the right character arrays to the characters array 
    if (useUpper) {
      characters = characters.concat(upperChar);
    } 
    
    if (useLower) {
      characters = characters.concat(lowerChar);
    } 

    if (useNum) {
      characters = characters.concat(num);
    } 

    if (useSpecial){
      characters = characters.concat(sym);
    }
    


    for(var i = 0; i< passwordLength; i++){
      password = password +  characters[Math.floor(Math.random() * characters.length)];
    }


    return password;
}
  



