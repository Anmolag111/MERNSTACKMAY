var arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9];
var playerName=1;
var playerValue='X';
var count=0;
var buttonId;
window.addEventListener('load',bindEvents);

function bindEvents(){
    document.getElementById('heading').innerText= `Its your turn Player 1 `;
    for(var i=1;i<=9;i++){
        document.getElementById(i).addEventListener('click',onClick);
    }
    document.getElementById('reset').addEventListener('click',resetGame);
}

function onClick(){
    buttonId=this.id;
    count++;
    disableButton(buttonId);
    setButtonValue();
    checkWinner();   
}

function disableButton(btnId){
    document.getElementById(btnId).disabled = true;
}

function enableButton(){
    for(var i=1;i<=9;i++){
        document.getElementById(i).disabled=false;
    }
}

function setButtonValue(){
    arr[buttonId-1]=playerValue;
    document.getElementById(buttonId).innerText=playerValue;    
}

function setPlayerValue(){
    if(playerValue==='X'){
        playerValue='O';
        playerName=2;
    }
    else{
        playerValue='X';
        playerName=1;
    }
    document.getElementById('heading').innerText= `Its your turn Player ${playerName} `;
}

function checkWinner(){
    if(((arr[0]===arr[1]) && (arr[1]===arr[2]))||((arr[3]===arr[4]) && (arr[4]===arr[5]))||
      ((arr[6]===arr[7]) && (arr[7]===arr[8]))||((arr[0]===arr[3]) && (arr[3]===arr[6]))||
      ((arr[1]===arr[4]) && (arr[4]===arr[7]))|| ((arr[2]===arr[5]) && (arr[5]===arr[8]))||
      ((arr[0]===arr[4]) && (arr[4]===arr[8]))||((arr[2]===arr[4]) && (arr[4]===arr[6]))){
        document.getElementById('heading').innerText=`Game finished`;
        document.getElementById('result').innerText=`Player ${playerName} won the match`; 
        for(var i=1;i<=9;i++){
            disableButton(i);
         } 
            alert('Game finished')
    } 
    else{
        setPlayerValue();
    } 
    if(count==9){
        document.getElementById('heading').innerText=`Game finished`; 
    }  
}

function resetGame(){
     count=0;
     arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9];
     playerName=1;
    document.getElementById('heading').innerText=`Its your turn Player  ${playerName}`;
      playerValue='X';
      document.getElementById('result').innerText=``;
     for(var i=1;i<=9;i++){
        document.getElementById(i).innerText=` `;
    }
    enableButton();
}