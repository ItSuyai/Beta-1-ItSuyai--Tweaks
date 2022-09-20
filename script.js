let mode=document.getElementById('mode');
let body=document.body;

mode.addEventListener('click', function(){
    let val=body.classList.toggle('white');
    localStorage.setItem('mode',val);
});

let modeValue=localStorage.getItem('mode')

if (modeValue=="true") {
    body.classList.add('white')
} else {
    body.classList.remove('white')
}