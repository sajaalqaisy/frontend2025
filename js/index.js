var boxjs = document.getElementsByClassName('box')[0]
console.log(boxjs)
function clickonmove(){
    // alert('you click on move')
   boxjs.style.backgroundColor='red'
   boxjs.style.color='blue'
   boxjs.innerHTML="this from js"
   boxjs.style.fontSize= '40px'
   boxjs.style.justifyConten='center'
  
}