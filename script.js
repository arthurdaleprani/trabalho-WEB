function validateForm(){

let insertNome = document.forms["formulario"] ["nome"].value
  if (insertNome == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};
function validateNome(){
console.log("called")
let insertNome = document.form["formulario"]["nome"].value
  if (insertNome == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};

function validateSenha(){
console.log("called")
let insertSenha = document.form["formulario"]["senha"].value
  if (insertSenha == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};
function validateCPF(){
console.log("called")
let insertCPF = document.form["formulario"]["CPF"].value
  if (insertCPF == ""){
    alert("Prencha todos os campos!")
    return false;
      
}else if(insertCPF.lenght !=11){
    alert("CPF INVALIDO");
return false
  }
};
 

function validateEmail(){

let insertEmail = document.forms["formulario"] ["email"].value
  if (insertEmail == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};
function validateForm(){

let insertEndereço = document.forms["formulario"] ["ende"].value
  if (insertEndereço == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};
function validateRG(){

let insertRG = document.forms["formulario"] ["RG"].value
  if (insertRG == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};


function validateData(){
let insertData = document.forms["formulario"] ["data"].value
  if (insertData == ""){
    alert("Prencha todos os campos!")
    return false;
  }
};


