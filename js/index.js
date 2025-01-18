var boxjs = document.getElementsByClassName('box')[0]
console.log(boxjs)
function clickonmove(){
    // alert('you click on move')
   boxjs.style.backgroundColor='brown'
   boxjs.style.color='white'
   boxjs.innerHTML="this from js"
   boxjs.style.fontSize= '40px'
   boxjs.style.justifyConten='center'
  
}
var calculate =document.getElementById('calculate')
calculate.addEventListener('submit',function(event){
    event.preventDefault();
    var number1=document.getElementById('number1').value
    var number2=document.getElementById('number2').value
    console.log(parseInt(number1)+parseInt(number2))
    var sumation =(parseInt(number1)+parseInt(number2))
    var reasult=document.getElementById('reasult')
    reasult.innerText=sumation
})

var calculate =document.getElementById('calculate1')
calculate.addEventListener('submit',function(event){
    event.preventDefault();
    var number3=document.getElementById('number3').value
    var number4=document.getElementById('number4').value
    var operation=document.getElementById('operation').value
    if (operation=="+"){
        var sumation=parseInt(number3)+parseInt(number4)
        
    }
    else if (operation=="-"){
        var sumation=parseInt(number3)-parseInt(number4)
    }
    else if (operation=="*"){
        var sumation=parseInt(number3)*parseInt(number4)
    }
    else{
        var sumation=parseInt(number3)/parseInt(number4)  
    }
    var r=document.getElementById('r')
    r.innerText=sumation
})

