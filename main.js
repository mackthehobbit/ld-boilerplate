
var WIDTH = 320;
var HEIGHT = 240;
var SCALE = 2;

var canvas = document.getElementById("game");
canvas.width = WIDTH * SCALE;
canvas.height = HEIGHT * SCALE;

var ctx = canvas.getContext('2d');
ctx.scale(SCALE, SCALE);
ctx.imageSmoothingEnabled = false;

var TICKS_PER_SECOND = 40;
var TIMESTEP = 1000 / TICKS_PER_SECOND;
var lastTimestamp = 0;
var delta = 0;

function loop(timestamp) {
	
	if(lastTimestamp != 0) {
		delta += timestamp - lastTimestamp;
		while(delta >= TIMESTEP) {
			if(delta / TIMESTEP > 100) {
				delta = 0;
				break;
			}
			update();
			delta -= TIMESTEP;
		}
	}
	lastTimestamp = timestamp;
	
	draw();
	
	requestAnimationFrame(loop);
	
}

function update() {
	
}

function draw() {
	
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, 320, 240);
	
}

requestAnimationFrame(loop);