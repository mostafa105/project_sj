let fullname        = document.getElementById("fullname");
let email           = document.getElementById("email");
let pass            = document.getElementById("pass");
let cpass           = document.getElementById("cpass")
let gender          = document.getElementById("gender")
let btnregistration = document.getElementById("btnregistration")
let error           = document.getElementById("error")
// function errorv(){
//     error.style.color ="red";
// }

function erroruv(){
    error.innerHTML=""
}
function getusers(){
         if (localStorage.getItem("fullname")==fullname.value){
            // errorv();
            error.innerHTML="This name is booked up."
        }else if(localStorage.getItem("email")==email.value){
            // errorv()
            error.innerHTML="this email is registered"
        }else{
            erroruv
        } 
}


fullname.addEventListener("focusout",checkfullname)

function checkfullname(){
    if(fullname.value==""){
        // errorv()
        error.innerHTML="full name is empty."
    }else{
        erroruv()
        const trimfullname = fullname.value.trim();
        const splitfullname = trimfullname.split(" ");
        if(splitfullname.length<2){
            // errorv()
            error.innerHTML="Full Name Is Not valid."
        }else{
            erroruv()
        }
   }
   getusers()
}

email.addEventListener("focusout",checkemail);

function checkemail(){
    const  contantemail = email.value
    if(contantemail.includes("@")){
        erroruv()
    }else{
        // errorv();
        error.innerHTML="email is valid."
    }
    getusers()
}

pass.addEventListener("focusout",checkpass);

function checkpass(){
    if(pass.value.length<3){
        // errorv()
       error.innerHTML="password could include 3 char or more."
    }else{
        erroruv()
        if(cpass.value!=""&&pass.value!=cpass.value){
            // errorv()
            error.innerHTML="password and confirm password is not equle."
        }else{
            erroruv
        }
    }
}

cpass.addEventListener("focusout",checkcpass);

function checkcpass(){

    if(cpass.value!=pass.value){
        // errorv()
        error.innerHTML="password and confirm password is not equle."
    }else{
        erroruv
    }
    
}
  btnregistration.addEventListener("click",singup);

  function singup(){
    checkpass()
    checkcpass();
    checkemail()
    checkfullname();
    getusers()
    if(error.innerHTML==""){
        localStorage.setItem("fullname",fullname.value)
        localStorage.setItem("password",pass.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("gender"+index,gender.value)
    }
   
  }


