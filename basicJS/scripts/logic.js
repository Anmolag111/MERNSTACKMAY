window.addEventListener('load',bindEvents);
function bindEvents(){
    document.getElementById('btn').addEventListener('click',sayWelcome);
    document.getElementById('clearall').addEventListener('click',clearAll);
}
function sayWelcome(){
    var first=document.getElementById('first').value;
    var last=document.getElementById('last').value;
    first=initCap(first);
    last=initCap(last);
    var result=`Welcome ${first} ${last}`;
    document.getElementById('output').innerText=result;  
}
function initCap(str){
    return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
}
function clearAll(){
    document.getElementById('first').value='';
    document.getElementById('last').value='';
    document.getElementById('output').innerText = '';
    document.getElementById('first').focus();
}