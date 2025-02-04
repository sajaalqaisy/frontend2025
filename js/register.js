var firstName=document.getElementById('firstName')
var lastName=document.getElementById('lastName')
var birthdayDate=document.getElementById('birthdayDate')
var emailAddress=document.getElementById('emailAddress')
var username=document.getElementById('username')
var password=document.getElementById('password')
var registerform=document.getElementById('registerform')
registerform.addEventListener("submit",function(event){
    event.preventDefault();
    localStorage.setItem("firstName",firstName.value)
    localStorage.setItem("lastName",lastName.value)
    localStorage.setItem("birthdayDate",birthdayDate.value)
    localStorage.setItem("emailAddress",emailAddress.value)
    localStorage.setItem("username",username.value)
    localStorage.setItem("password",password.value)
    console.log(  localStorage.getItem("username"))
    /*عشان لما اسجل المعلومات يعطيني تنبيه انمه تم حفظ المعلومات وينقلني على صفحة اللوغ ان*/
    alert('you have sucssefull registred')
    window.location.href="./login.html"
})