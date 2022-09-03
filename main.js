function passwordgenerator(){
  var password= concatenate();
  document.querySelector(".password").innerHTML = password;
}
function concatenate(){
  //Código ASCII ou Valor Unicode (decimal) 
  //do 33-126 
  var n=0;
  var letter='';
  while(n<8){
    letter += String.fromCharCode(letterrandon(33,126));
    n++;
  }
  return letter;
}
function letterrandon(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}