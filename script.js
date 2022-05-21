let carro="VOLVO";
//alert("alo mundo");
let a="1";
let b="5";
//alert (a+b);

function Clicou(){
    alert("voce clicou em um botão");
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e)=>{e.preventDefault; checkInputs();});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(usernameValue===""){
        setErrorFor(username,"O nome de usuário é obrigatório");
    }else{
        setSucessFor(username);
    }
    if(emailValue===""){
        setErrorFor(email, "O email é obrigatório");
    }else{
        setSucessFor(email);
    }
    if(passwordValue===""){
        setErrorFor(password, "A senha é obrigatório");
    }else if(passwordValue.length<7){
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres");
    }
    else{
        setSucessFor(password);
    }
    if(passwordConfirmationValue===""){
        setErrorFor(passwordConfirmation, "Confirmação da senha é obrigatória");
    }else if(passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "As senhas não conferem");
    }
else{
    setSucessFor(passwordConfirmation);
}
const formControls = form.querySelectorAll(".form-control");
const formIsvalid = [...formControls].every((formControls)=>{return formControl.className==="form-control sucess";
});
if(formIsvalid) {
    console.log("O formulário está 100% válido!");
}
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //Adiciona a mensagem de erro
    small.innerText = message;
    //Adiciona a classe de erro
    formControl.className="form-control error";
}

function setSucessFor(input){
    const formControl = input.parentElement;
    //Adiciona a classe de sucesso
    formControl.className="form-control sucess";
}

function checkEmail(email){
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]=\.([a-z]+)?$/i.test(email);
}




