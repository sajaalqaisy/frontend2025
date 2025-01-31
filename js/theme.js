document.body.style.backgroundColor=localStorage.getItem('theme')
var cssFile=document.getElementById('cssFile')/*عشان اخلي الجافا تغير الملف فاعطيا cssid*/
// cssFile.href='css/darkthem.css'/* تغيير قيمة اللينك وهي بتتغير حسب لكليك فبحطها عند لبلاك*/
cssFile.href=localStorage.getItem('file')
var white=document.getElementById('white')
    white.addEventListener('click',function() {
        console.log('white')
        document.body.style.backgroundColor='white'
        localStorage.setItem('theme','white')
        cssFile.href='css/theme.css'
        localStorage.setItem('file','css/theme.css')
    })
    
    var black=document.getElementById('black')
    black.addEventListener('click',function() {
        console.log('black')
       document.body.style.backgroundColor='black'
       localStorage.setItem('theme','black')
       cssFile.href='css/darkthem.css'
       localStorage.setItem('file','css/darkthem.css')
      
    })
   var infoform=document.getElementById('infoform')
   var container=document.getElementsByClassName('container')[0]/*جبتها لاني بدي اضيف على هاي لكلاس*/
   infoform.addEventListener('submit',function(event){
    event.preventDefault();
    var info=document.getElementById('info').value
    var infoP=document.createElement('h3')
    infoP.innerText=info
    container.appendChild(infoP)
   })
