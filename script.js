// document.querySelector('.message').textContent = 'Correct Number!!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 23;
// document.querySelector('.score').textContent = 10;

const secret = Math.trunc(Math.random() * 20)+1;
score = 20;
let highScore = 0;
const displayMessage = function(message){
     document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //when player doesnt input value
if(!guess){
    displayMessage('No number !');
}
//when player wins
else if(guess === secret){
    displayMessage('Correct number !!');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if(guess !== secret){
    if(score > 1){
     displayMessage(guess > secret ? 'To high !' : 'To low !');
    score--;
     document.querySelector('.score').textContent = score;
    }
    else{
    document.querySelector('.message').textContent = 'You lost the game';
}
}
});

document.querySelector('.again').addEventListener('click', function(){
     var secret = Math.trunc(Math.random() * 20)+1;
     document.querySelector('.number').textContent = '?';
      displayMessage('Start guessing...');
     document.querySelector('.score').textContent = secret;
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.guess').value = '';
})