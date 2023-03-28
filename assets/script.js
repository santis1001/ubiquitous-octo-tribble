// Assigns variable context to the password container and the generate button
var generateBtn = document.querySelector("#generate");
var textarea = document.getElementById('#password');

/*
  Function for valuating the length of the password
  It should be at least 8 characters and no more than 128 characters and of course, numeric.
  Returns a numeric value for length.
*/
function length_promts(){
  var psw_length = 0;
  do{
  psw_length = window.prompt("Please provide the length for the password\nMinimum:8 - Maximum:128","");
  try {
    psw_length = Number.parseInt(psw_length);
  } catch (error) {
    console.log("error");
  }
}while(psw_length==0 || psw_length<8 || psw_length>128 || !(Number.isInteger(psw_length)));
  return psw_length;
}
/*
  Function for valuating the criteria for the password
  The criteria were the follows:
    -Confirmation prompt for lowercase characters
    -Confirmation prompt for uppercase characters
    -Confirmation prompt for numeric characters
    -Confirmation prompt for special characters
  Returns a boolean array with a true/false value for each criteria.
*/
function type_promts(){
  var types_char;
  var continue_val = true;
  do{
    window.alert("What types of characters should be included in the key?\nlowercase, uppercase, numeric, and/or special\nAt least one type should be selected!");    
    
    let hasL = window.confirm("should contain lowercase characters?");
    let hasU = window.confirm("should contain uppercase characters?");
    let hasN = window.confirm("should contain numeric characters?");
    let hasS = window.confirm("should contain special characters?");

    types_char = [hasL, hasU, hasN, hasS];

    continue_val= !(hasL || hasU || hasN || hasS); 
    if(continue_val){
      alert("At least one type should be selected");    
    }
  }while(continue_val);
  return types_char;
}
/*Funtion that generates the password:
start with a loop for the length of the password. 
Then generates a random integer from 0 to 3 that just land on the criteria selected 
for then evaluate the option in a switch that will add the character to the password 
and goes for the rest of the loop.
*/
function generatePassword(psw_length,psw_types){
  var passwordgen;
  var aux_password = "";
  for(let i=0;i<psw_length;i++){
    let random;
    do{
      random = Math.floor(Math.random() * 4);

    }while(!psw_types[random]);

    switch(random){
      case 0:
        aux_password = aux_password + lowercaseRandom() + "";
        break;
      
      case 1:
        aux_password = aux_password + uppercaseRandom() + "";
        break;
      
      case 2:
        aux_password = aux_password + numericRandom() + "";
        break;
      
      case 3:
        aux_password = aux_password + specialRandom() + "";
        break;
    }
    
  }  
  passwordgen = aux_password;
  return passwordgen;
}

/*
  Returns a character randomly selected from the bank to the funcition call
*/
function lowercaseRandom() {
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var aux = Math.floor(Math.random() * letters.length);
  var lowercase = letters.charAt(aux);
  return lowercase;
}
function uppercaseRandom() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var aux = Math.floor(Math.random() * letters.length);
  var uppercase = letters.charAt(aux);
  return uppercase;
}
function numericRandom() {
  var aux = Math.floor(Math.random() * 10);
  var numeric = aux+"";
  return numeric;
}
function specialRandom() {
  var chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var aux = Math.floor(Math.random() * chars.length);
  var specialchars = chars.charAt(aux);
  return specialchars;
}

// variable assignment and function run
// outputs the generated text on the page
function writePassword() {
  
  var psw_length = length_promts();
  var psw_types = type_promts();
  
  var password = generatePassword(psw_length, psw_types);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
