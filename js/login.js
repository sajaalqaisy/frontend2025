var email=document.getElementById('email')
var password=document.getElementById('password')
var loginform=document.getElementById('loginform')
loginform.addEventListener("submit",function(event){
    event.preventDefault();
/*access to local storage*/
 var userList=localStorage.getItem(JSON.parse('user'));
 var passlogin=false
 for (var i=0;i<userList.length;i++){

    if(email.value==userList[i].email && password.value==userList[i].password){
       passlogin=true
       break;
    }

    if(passlogin==true){
         window.location.href="./theme.html"}
        else{
            alert('wrong password or email')
        }
}
})   
