//* variáveis => form => username =>email =>password
const form = document.getElementById("form");
const username =  document.getElementById("username");
const email =  document.getElementById("email");
const password =  document.getElementById("password");
const passwordConfirmation=  document.getElementById("password-confirmation");

//* Evento listener descrito abaixo para quando for dado um submit no form

form.addEventListener("submit", (e) => {
    e. preventDefault ();

    checkInputs();
} ) ;

function checkInputs ( ) {
    const usernameValue = username.value;
    const emailvalue = email.value;
    const passwordvalue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === "") {
        setErrorFor(username,"O nome do usuário é obrigatório."); 
        
    } else {
        setSuccessFor(username);
    }

    if (emailvalue === ""){
        setErrorFor(email,"O email é obrigatório."); 
    } else if(! checkEmail ( emailvalue ) ) {
        setErrorFor ( email ,  "Por favor, insira um email válido." ) ;
    } else {
        setSuccessFor(email);
    }
}

if (senhavalue === ""){
    setErrorFor ( senha ,  "A senha é obrigatória." ) ;
  }  else  if  ( passwordValue . length  <  7 )  {
    setErrorFor ( senha ,  "A senha precisa ter no mínimo 7 caracteres." ) ;
  }  else {
    setSuccessFor ( senha ) ;
  }

  if  ( passwordConfirmationValue  ===  "" )  {
    setErrorFor ( passwordConfirmation ,  "A confirmação de senha é obrigatória." ) ;
  }  else  if  ( passwordConfirmationValue  !==  passwordValue )  {
    setErrorFor ( passwordConfirmation ,  "As senhas não conferem." ) ;
  }  else  {
    setSuccessFor ( password-confirmation ) ;
  }

  const  formControls  =  form . querySelectorAll ( ".form-control" ) ;

  const  formValid  =  [ ... formControls ] . cada ( ( formControl )  =>  {
    return  formControl . className  ===  "sucesso do controle de formulário" ;
  } ) ;

  if  ( formIsValid )  {
    console.log ( "O válido está 100% formulário!" ) ;
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adicionar mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //adicionar a classe de sucesso
    formControl.className = "form-control success";
}


function  checkEmail(email ){
    return  / ^ ( ( [ ^<>() \[ \] \\ .,;: \s @" ] + ( \. [ ^<>() \[ \] \\ .,;: \s @" ] + ) * ) | ( ". + " ) ) @ ( ( \[ [ 0-9 ] { 1,3 } \. [ 0-9 ] { 1,3 } \. [ 0-9 ]{ 1,3 } \. [ 0-9 ] { 1,3 } ] ) | ( ( [ a-zA-Z \- 0-9 ] + \. ) + [ a-zA-Z ] { 2, } ) ) $ / . teste (
      o email) ;
}

