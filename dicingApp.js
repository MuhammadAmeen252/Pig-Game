var scores,roundScore,activePlayer,dice,PrevActiveP,IsWinner;
newGame();
//console.log(dice);
//document.getElementById('CScore-'+activePlayer).textContent = dice;
//document.getElementById('TextP'+activePlayer).innerHTML='<em>'+'PLAYER '+activePlayer+'<em>';
document.querySelector('.dicrollPic').style.visibility='hidden';

document.querySelector('.RollGameBtn').addEventListener('click',function(){
    if(IsWinner!==true){
    dice=Math.floor(Math.random()*6)+1;
    var selectDice=document.querySelector('.dicrollPic');
    selectDice.style.visibility='visible';
    selectDice.src='images/dice-'+dice+'.png';
    if(dice !== 1)
    {
        roundScore+=dice;
        document.getElementById('CScore-'+activePlayer).textContent = roundScore;
    }
    else
    {
        roundScore=0;
        document.querySelector('.dicrollPic').style.visibility='hidden';
        PrevActiveP=activePlayer;
        nextPlayer();
        document.getElementById('CScore-1').textContent='0';
        document.getElementById('CScore-2').textContent='0';
        document.querySelector('.player'+activePlayer).style.backgroundColor='#e5e5e5';
        document.querySelector('.player'+PrevActiveP).style.backgroundColor='#F5f5f5';
        document.getElementById('TextP'+activePlayer).style.backgroundColor='#89cff0';
        document.getElementById('TextP'+PrevActiveP).style.backgroundColor='white';
        
    }
}
})

document.querySelector('.HoldGameBtn').addEventListener('click',function(){
    if(dice!==1){
    
    scores[activePlayer-1]+=roundScore;
    roundScore=0;
    document.getElementById('TScore-'+activePlayer).textContent=scores[activePlayer-1];
    document.getElementById('CScore-'+activePlayer).textContent='0';
    winner();
    if(!IsWinner){
    nextPlayer();
    document.querySelector('.player'+activePlayer).style.backgroundColor='#e5e5e5';
    document.querySelector('.player'+PrevActiveP).style.backgroundColor='#F5f5f5';
    document.getElementById('TextP'+activePlayer).style.backgroundColor='#89cff0';
    document.getElementById('TextP'+PrevActiveP).style.backgroundColor='white';
    }
    else
    {
        //newGame();
    }
    
    }
})
document.querySelector('.NewGameBtn').addEventListener('click',newGame)
function newGame()
{
    IsWinner=false;
    document.getElementById('TextP1').textContent='PLAYER 1';
    document.getElementById('TextP2').textContent='PLAYER 2';
    scores=[0,0];
    roundScore=0;
    activePlayer=1;
    document.getElementById('CScore-1').textContent='0';
    document.getElementById('CScore-2').textContent='0';
    document.getElementById('TScore-1').textContent='0';
    document.getElementById('TScore-2').textContent='0';
}

function nextPlayer(){
    PrevActiveP=activePlayer;
    activePlayer === 1 ? activePlayer=2 : activePlayer=1;
    roundScore=0;      
}
function winner()
{
    if(scores[activePlayer-1] >= 20)
    {
        document.getElementById('TextP'+activePlayer).textContent='WINNER!';
        document.querySelector('.dicrollPic').style.visibility='hidden';
        IsWinner=true;
    }
}