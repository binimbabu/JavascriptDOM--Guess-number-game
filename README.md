index.html

<p class="message">Start guessing...</p>

script.js

document.querySelector('.message').textContent

document.querySelector('.message') is used to call class message here, consoling this (document.querySelector('.message')) we will get  <p class="message">Start guessing...</p>


console.log(document.querySelector('.message').textContent); which gets value 'Start guessing...' since is the textcontent for message class(<p class="message">Start guessing...</p>)

DOM is document object model: structured representation of HTML documents allows javascript to access HTML elements and styles to manipulate them.

DOM methods and properties (eg: - document.querySelector) are part of web api's which web browser like google chrome, mozilla, microsoft edge etc. Bu these DOM methods and properties can be accesssed by JavaScript

When I use this code statement 'document.querySelector('.message').textContent = 'Correct Number!!';' then the previous text content (<p class="message">Start guessing...</p>) 'Start guessing.. ' replaced with 'Correct Number!!'. Since p tag content data can be changed by the 'textContent'

'<div class="number">?</div>' , ' <input type="number" class="guess" />' and ' <span class="score">20</span></p>' in index.html are going to replace the textContent as follows
Since div and span tag content data can be changed by the 'textContent'


script.js

document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 10;

changes the text content of class 'number' and 'score'. here 'document.querySelector('.guess').value = 23;' since guess is a class input tag in HTML value need to be used to change the value instead of textcontent

for the button click we need to add event listener for that we need to call the class 'check' where the check button class is 'check' (eg:  <button class="btn check">Check!</button>)

script.js

document.querySelector('.check').addEventListener('click', function(){
    document.querySelector('.guess').value = 20;
})

where click ( click is the first argument to addEventListener) in the addEventListener is the type is event to be performed for the button, reaction to click event is the second argument to addEventListener. reaction to click event is a function to click event. On button click the guess input tag will have value 20( document.querySelector('.guess').value = 20;). The function() second argument gets invoked only if there is a button click.


script.js

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent = "No number !"
}
})


Number(document.querySelector('.guess').value) willconvert the type to Number   ( typeof(document.querySelector('.guess').value) ) instead of string.

if(!guess) then we will return Boolean either guess value is existing then the if (if(!guess) ) returns true and if no value then returns false.
 

script.js of game

const secret = Math.trunc(Math.random() * 20)+1;
score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent = "No number !"
}
else if(guess === secret){
   document.querySelector('.message').textContent = 'Correct number !!';
   document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if(guess > secret){
    if(score > 1){
     document.querySelector('.message').textContent = 'To high !';
    score--;
     document.querySelector('.score').textContent = score;
    }
    else{
    document.querySelector('.message').textContent = 'You lost the game';
    }
}
else if(guess < secret){
    if(score > 1){
     document.querySelector('.message').textContent = 'To low !';
     score--;
      document.querySelector('.score').textContent = score;
    }
      else{
    document.querySelector('.message').textContent = 'You lost the game';
    }
}
})

document.querySelector('.again').addEventListener('click', function(){
     var secret = Math.trunc(Math.random() * 20)+1;
     document.querySelector('.number').textContent = '?';
      document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.score').textContent = secret;
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.guess').value = '';
})

This line of code ' document.querySelector('body').style.backgroundColor = '#60b347';' will select the 'body' HTML element  and change the style backgroundColor to '#60b347'. Here 'backgroundColor' is used instead of CSS style background-color. the style color value used should be enclosed in single quotes (eg:- '#60b347' ).
