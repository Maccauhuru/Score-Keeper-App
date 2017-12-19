//create variables to select the buttons from document

var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("#gameScore");
var numPlays = document.querySelector("p span");
var p1score = 0;
var p2score =0;
var gameOver = false;
var winningScore =5;


p1btn.addEventListener("click",function(){
	if(!gameOver){
	p1score++;
}
    if(p1score === winningScore){
    	p1Display.classList.add("winner");
    	gameOver = true;
    }
   p1Display.textContent = p1score;

});

p2btn.addEventListener("click",function(){
	if(!gameOver){
    p2score++;
}
    if(p2score === winningScore){
    	p2Display.classList.add("winner");
    	gameOver = true;
    }
    p2Display.textContent = p2score;
});

resetbtn.addEventListener("click",function(){
    reset();
});

numInput.addEventListener("change",function(){
numPlays.textContent = this.value;
winningScore = Number(this.value);
reset();
});

function reset(){
	 p1score = 0;
     p2score =0;
     p1Display.textContent=p1score;
     p2Display.textContent=p2score;
     p1Display.classList.remove("winner");
     p2Display.classList.remove("winner");
     gameOver=false;
}

//console.log(numPlays);