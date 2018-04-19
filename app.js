
var currentScore,activePlayer=0;
currentScore=[0,0];
globalScore=[0,0];
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;



function backtozero()
{
	if(activePlayer==0){
		currentScore[0]=0;
		document.getElementById('current-0').textContent=currentScore[0];
	}else{
		currentScore[1]=0;
		document.getElementById('current-1').textContent=currentScore[1];
	}

}
document.querySelector('.btn-hold').addEventListener('click',function(){
	document.querySelector('.dice').src='';
	globalScore[activePlayer] +=currentScore[activePlayer];
	if(globalScore[activePlayer]>=100)
	{
		globalScore=[0,0];
		activePlayer=0;
		currentScore=[0,0];
		document.querySelector('.dice').src='';
		document.getElementById('score-0').textContent=0;
		document.getElementById('score-1').textContent=0;
		document.getElementById('current-0').textContent=0;
		document.getElementById('current-1').textContent=0;
		alert('YOU WIN');
	}
	document.getElementById('score-'+activePlayer).textContent=globalScore[activePlayer];
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	currentScore[activePlayer]=0;
	if(activePlayer==0)
		activePlayer=1;
	else if(activePlayer==1)
		activePlayer=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;


});
document.querySelector('.btn-roll').addEventListener('click', function(){
var dice=Math.floor(Math.random()*6+1);
if (activePlayer==0) {
	if (dice!==1) 
	{
		currentScore[0] +=dice;
		document.getElementById('current-0').textContent=currentScore[0];
		document.querySelector('.dice').src='dice-'+dice+'.png';
	}
	else{
		backtozero();
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.dice').src='';
		activePlayer=1;
	}

}
else if (activePlayer==1) {
	if (dice!==1) 
	{
		currentScore[1] +=dice;
		document.getElementById('current-1').textContent=currentScore[1];
		document.querySelector('.dice').src='dice-'+dice+'.png';
		
	}
	else{
		backtozero();
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').src='';
		activePlayer=0;
	}

};

document.querySelector('.btn-new').addEventListener('click',function(){
	globalScore=[0,0];
	activePlayer=0;
	currentScore=[0,0];
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.dice').src='';
	document.getElementById('score-0').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;
})

});