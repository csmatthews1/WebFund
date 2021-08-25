
//Static layout of initial world
var world = 	[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
				[1,3,1,1,2,1,1,2,1,2,1,1,2,1,1,3,1],
                [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
                [1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1],
                [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
                [1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1],
                [1,1,1,2,2,2,1,0,0,0,1,2,2,2,1,1,1],
                [1,1,1,2,1,2,1,0,0,0,1,2,1,2,1,1,1],
                [2,2,2,2,1,2,1,1,1,1,1,2,1,2,2,2,2],
                [1,1,1,2,2,2,1,2,2,2,1,2,2,2,1,1,1],
                [1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1],
                [1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1],
                [1,2,1,1,2,1,1,2,0,2,1,1,2,1,1,2,1],
                [1,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1],
                [1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1],
                [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
                [1,3,1,1,2,1,1,1,2,1,1,1,2,1,1,3,1],
                [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var worldDict = {
	0: 'blank',
	1: 'wall',
	2: 'coin',
	3: 'power'
}
var gameOver = 1;
var lives = 3;
var chaseMode = 0;
var audio_siren;
var audio_chase;
const PELLETS = 164;
var pelletCount;
var flashCount= 10;
var flash = false;

var moveInterval = 0;
var flashInterval = 0;

//Hides Game Screen and shows new game dialog
function hideGame() {
	document.getElementById("game").style.display = "none";
	document.getElementById("start-dialog").style.display = "block";
}

//Draws the World (walls, pellets and empty squares)
function drawWorld() {
	var output = "";
	if (gameOver==1)
	{
		hideGame();
		return;
	}
	for (var row = 0; row < world.length; row++) {
		output += "<div class = 'row'>"
		for (var x = 0; x < world[row].length; x++){
			output += "<div class = '" + worldDict[world[row][x]] + "'></div>";

		}
		output += "</div>";
	}
	document.getElementById ('world').innerHTML = output;
}

//Initialize starting points
var pacman = {
	x: 8,
	y: 13
}

var pinky = {
	x: 9,
	y: 8
}

var inky = {
	x: 8,
	y: 8
}


var blinky = {
	x: 1,
	y: 1
}
var clyde = {
	x: 7,
	y: 8
}


	var score = 0;

//Updates pacman position
function drawpacman(){
	document.getElementById('pacman').style.left = 40 * pacman.x + 'px';
	document.getElementById('pacman').style.top = 165 + 40 * pacman.y +'px';
}

//Updates ghost locations
function drawGhosts(){
	document.getElementById('pinky').style.left = 40 * pinky.x + 'px';
	document.getElementById('pinky').style.top = 165 + 40 * pinky.y +'px';
	document.getElementById('inky').style.left = 40 * inky.x + 'px';
	document.getElementById('inky').style.top = 165 + 40 * inky.y +'px';
	document.getElementById('blinky').style.left = 40 * blinky.x + 'px';
	document.getElementById('blinky').style.top = 165 + 40 * blinky.y +'px';
	document.getElementById('clyde').style.left = 40 * clyde.x + 'px';
	document.getElementById('clyde').style.top = 165 + 40 * clyde.y +'px';
}

//Shows the game screen and starts a new game when button is pressed
function startGame () {
	document.getElementById("game").style.display = "block";
	document.getElementById("start-dialog").style.display = "none";
	gameOver=0;
	lives = 3;
	pelletCount=PELLETS;
	document.getElementById('status').innerHTML = 'Lives: ' + lives;
	score = 0;
	document.getElementById('score').innerHTML = 'Current Score: ' + score;
	initializeWorld();
	drawWorld();
	audio_siren = document.getElementById("snd-siren");
	document.getElementById("snd-siren").loop = true;
	document.getElementById("snd-siren").volume = 0.5;
	audio_siren.play();
	var audio = document.getElementById("snd-start");
	audio.play();
	moveInterval = setInterval(moveGhosts, 300);
}

//Responds to arrow keys strokes during gameplay
document.onkeydown = function (e){
if(!gameOver)
{
	if(e.keyCode == 37) {
		if(world[pacman.y][pacman.x-1] != 1){
			if(pacman.x == 0) {
				pacman.x = 17;
			}
			pacman.x--;
			document.getElementById("pacman").style.backgroundImage = "url(img/pacman-l.gif)"
		}
	}
	if(e.keyCode == 38) {
		if(world[pacman.y-1][pacman.x] != 1){
			pacman.y--;
			document.getElementById("pacman").style.backgroundImage = "url(img/pacman-u.gif)" 
		}
	}
	if(e.keyCode == 39) {
		if(world[pacman.y][pacman.x+1] != 1){
			if(pacman.x == 16) {
				pacman.x = -1;
			}
			pacman.x++;
			document.getElementById("pacman").style.backgroundImage = "url(img/pacman-r.gif)"
		}
	}
	if(e.keyCode == 40) {
		if(world[pacman.y+1][pacman.x] != 1){
			pacman.y++;
			document.getElementById("pacman").style.backgroundImage = "url(img/pacman-d.gif)"
		}
	}
	drawpacman();
	if (world[pacman.y][pacman.x] == 2) {
		score += 10;
		pelletCount--;
		var audio = document.getElementById("snd-chomp");
		audio.play();
		document.getElementById('score').innerHTML = 'Current Score: ' + score;
		if (!pelletCount) {
			clearInterval(moveInterval);
			wonGame();
			return;
		}
	}
	if (world[pacman.y][pacman.x] == 3) {
		score += 5;
		pelletCount--;
		var audio = document.getElementById("snd-chomp");
		audio.play();
		if (!pelletCount) {
			clearInterval(moveInterval);
			audio_siren.pause();
			wonGame();
			return;
		}
		chaseMode=1;
		chase();
		setTimeout(endChase, 10000);
		document.getElementById('score').innerHTML = 'Current Score: ' + score;
	}

	world[pacman.y][pacman.x] = 0;
	drawWorld();
	drawpacman();
	checkDeath();
}
}

//Timed interval function to moves ghosts during gameplay
function moveGhosts ()
{
	pinky = moveGhost(pinky.x, pinky.y);
	inky = moveGhost(inky.x, inky.y);
	blinky = moveGhost(blinky.x, blinky.y);
	clyde = moveGhost(clyde.x, clyde.y);
	drawGhosts();
	checkDeath();
}

//Switches to chase mode after power pellet
function chase() {
	document.getElementById("inky").style.backgroundImage = "url(img/scared.gif)";
	document.getElementById("blinky").style.backgroundImage = "url(img/scared.gif)";
	document.getElementById("pinky").style.backgroundImage = "url(img/scared.gif)";
	document.getElementById("clyde").style.backgroundImage = "url(img/scared.gif)";

	audio_chase = document.getElementById("snd-chase");
	audio_siren = document.getElementById("snd-siren");
	document.getElementById("snd-chase").loop = true;
	document.getElementById("snd-chase").volume = 0.7;
	audio_siren.pause();
	audio_chase.play();
}

//Ends chase mode after time elapses
function endChase() {
	chaseMode = 0;
	document.getElementById("inky").style.backgroundImage = "url(img/inky.gif)";
	document.getElementById("blinky").style.backgroundImage = "url(img/blinky.gif)";
	document.getElementById("pinky").style.backgroundImage = "url(img/pinky.gif)";
	document.getElementById("clyde").style.backgroundImage = "url(img/clyde.gif)";

	if (!gameOver) {
		audio_chase = document.getElementById("snd-chase");
		audio_siren = document.getElementById("snd-siren");
		audio_chase.pause();
		audio_siren.play();
	}
}

//Move ghost to a new location by randomly selecting an available direction (without a wall)
function moveGhost (x, y) 
{
	var moved = 0;
	var ghost = {
	x: 0,
	y: 0
	}
ghost.x = x;
ghost.y = y;

	var possibleMoves = [0,0,0,0];

	if (world[y][x-1] != 1)
	{
		possibleMoves[0] = 1;
	}
	if (world[y-1][x] != 1)
	{
		possibleMoves[1] = 1;
	}
	if (world[y][x+1] != 1)
	{
		possibleMoves[2] = 1;
	}
	if (world[y+1][x] != 1)
	{
		possibleMoves[3] = 1;
	}
		

	while (moved == 0)
	{
		rand = Math.floor(Math.random() * 4); //Pick a random direction;
		if (possibleMoves[rand])
		{
			if (rand == 0) {
				if (ghost.x == 0){
					ghost.x = 16;
				}
				else {
					ghost.x--;
				}
				moved = 1;
			}
			else if (rand == 1) {
				ghost.y--;
				moved = 1;
			}
			else if (rand == 2) {
				if (ghost.x == 16){
					ghost.x = 0;
				}
				else {
					ghost.x++;
				}
				moved = 1;	
			}
			else {
				ghost.y++;
				moved = 1;
			}
		}
	}
	return ghost;

}

//Check for collisions between ghosts and pacman
//Result is death of pacman in normal mode or death of ghost in chase mode
function checkDeath()
{
	if ((pacman.x == pinky.x && pacman.y == pinky.y) || (pacman.x == inky.x && pacman.y == inky.y) 
		|| (pacman.x == blinky.x && pacman.y == blinky.y) || (pacman.x == clyde.x && pacman.y == clyde.y))
	{
		if (chaseMode) {
			if (pacman.x == pinky.x && pacman.y == pinky.y) {
				pinky.x = 8;
				pinky.y = 7;
			}
			else if (pacman.x == inky.x && pacman.y == inky.y) {
				inky.x = 8;
				inky.y = 7;
			}
			else if (pacman.x == blinky.x && pacman.y == blinky.y) {
				blinky.x = 8;
				blinky.y = 7;
			}
			else {
				clyde.x = 8;
				clyde.y = 7;				
			}
			var audio = document.getElementById("snd-eatghost");
			audio.play();				
			score += 200;
			document.getElementById('score').innerHTML = 'Current Score: ' + score;
			drawGhosts();
			return;
		}
		lives--;
		var audio = document.getElementById("snd-death");
		audio.play();
		resetGame();
	}
}

//Reset the game after pacman dies. If all lives are gone, end the game.
function resetGame()
{
	if (lives > 0)
	{
			document.getElementById('status').innerHTML = 'Lives: ' + lives;
			pacman.x = 8;
			pacman.y = 13;
			drawpacman();

	}
	else 
	{
		document.getElementById('status').innerHTML = 'GAME OVER: Play again soon!';
		gameOver = 1;
		audio_siren.pause();
		clearInterval(moveInterval);
		setTimeout(hideGame, 4000);
		
	}
}

//After all pellets are gone, display game won sequence and exit.
function wonGame() {
	gameOver = 1;
	audio_chase = document.getElementById("snd-chase");
	audio_siren = document.getElementById("snd-siren");
	audio_siren.pause();
	audio_chase.pause();
	flashInterval = setInterval (flashScreen,500);
	document.getElementById('status').innerHTML = "YOU WIN!!! Congratulations!";
	var audio = document.getElementById("snd-win");
	audio.play();


}

//Interval function to flash the game walls for 5 seconds when game is won
function flashScreen() {
	if (flashCount) {
		var walls = document.getElementsByClassName("wall");
		if(flash) {
			for (var i=0; i < walls.length; i++) {
				walls[i].style.backgroundColor = "white";
			}
		}
		else {
			for (var i=0; i < walls.length; i++) {
				walls[i].style.backgroundColor = "#2020f9";
			}
		}
		flashCount--;
		flash = !flash;
	}
	else {
		clearInterval(flashInterval);
		flashCount = 10;
		hideGame();
	}	
}

//Reset the initial world for a new game
function initializeWorld() {
	for (var i=0; i < world.length; i++) {
		for (var j=0; j < world[i].length; j++) {
			if (world[i][j] == 0) {
				world[i][j] = 2;
			}
		}
	}
	world[2][1] = 3;
	world[17][1] = 3;
	world[2][15] = 3;
	world[17][15] = 3;
	world[13][8] = 0;
	world[7][7] = 0;	
	world[7][8] = 0;	
	world[7][9] = 0;	
	world[8][7] = 0;	
	world[8][8] = 0;
	world[8][9] = 0;
	pinky = moveGhost(8,7);
	inky = moveGhost(1, 1);
	blinky = moveGhost(8,8);
	clyde = moveGhost(8,9);
	drawGhosts();
	pacman.x = 8;
	pacman.y = 13;
	drawpacman();

}

