var email=document.getElementById('email')
var password=document.getElementById('password')
var loginform=document.getElementById('loginform')
loginform.addEventListener("submit",function(event){
    event.preventDefault();
    if(email.value==localStorage.getItem("emailAddress") && password.value==localStorage.getItem("password")){
        window.location.href="./theme.html"
    }
    else{
        alert('wrong password or email')
    }
})   
