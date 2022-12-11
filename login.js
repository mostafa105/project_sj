let email     = document.getElementById("email");
let pass      = document.getElementById("pass");
let btnlogin  = document.getElementById("btnlogin")
let error     = document.getElementById("error")
function erroruv(){
    error.innerHTML=""
}
function getusers(){
    if(email.value==""){
        error.innerHTML="email is empty" 
    }
    else if(pass.value==""){
        error.innerHTML="password is empty" ;
    }else{
        if(localStorage.getItem("email")!=email.value){
            error.innerHTML="this email is not Existing" 
        }else if(localStorage.getItem("password")!=pass.value){
            error.innerHTML="password uncorected" ;   
        }else{
             erroruv()
        }
    }
}
btnlogin.addEventListener("click",login);
function login(){
     getusers()
    if(error.innerHTML==""){
      open("registration.html","_parent")
    }
}