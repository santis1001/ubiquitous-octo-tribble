// Assignment Code
var generateBtn = document.querySelector("#generate");
var textarea = document.getElementById('#password');


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

function generatePassword(psw_length,psw_types){
  var passwordgen;
  var auxiliar_password = "";
  for(let i=0;i<psw_length;i++){
    let random;
    do{
      random = Math.floor(Math.random() * 4);

    }while(!psw_types[random]);

    switch(random){
      case 0:
        auxiliar_password = auxiliar_password + lowercaseRandom() + "";
        break;
      
      case 1:
        auxiliar_password = auxiliar_password + uppercaseRandom() + "";
        break;
      
      case 2:
        auxiliar_password = auxiliar_password + numericRandom() + "";
        break;
      
      case 3:
        auxiliar_password = auxiliar_password + specialRandom() + "";
        break;
    }
    
  }  
  passwordgen = auxiliar_password;
  return passwordgen;
}

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

// Write password to the #password input
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
