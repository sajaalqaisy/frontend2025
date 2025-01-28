document.body.style.backgroundColor=logal.storage.getIteme("theme")
var cssfile=document.getElementById('cssfile')
cssfile.herf=localStorage.getItem('file')
var white=document.getElementById('theme')
    white.addEventListener('click',function() {
        console.log('white')
        document.body.style.backgroundColor='white'
        localStorage.setItem('theme','white')
        localStorage.setItem('file','css/theme.css')

    
    })
    
    var black=document.getElementById('theme')
    black.addEventListener('click',function() {
        console.log('black')
        document.body.style.backgroundColor='black'
        localStorage.setItem('theme','black')
        cssfile.herf='css/darkthem.css'
        localStorage.setItem('file','css/darkthem.css')
    })
    var infoform=document.getElementById('infoform' )
    var container=document.getElementsByClassName('container')[0]
    infoform.addEventListener('submit',function(event)){
        event.preventDefault();
        var infoform=document.getElementById('info').value
        var infop=document.createElement('p')
        infop.innerText=info
        container.appendChild(infop)
    }
