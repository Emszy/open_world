var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var player;
var player_x = canvas.width / 2;
var player_y = canvas.height / 2;
var vel_x = 0;
var vel_y = 0;
var maxSpeed = 30;
var total_map_width = 150 * 128 - 100;
var total_map_height = 150 * 128 - 100;
var win_width;
var win_height;
var map_pos_x = 0;
var map_pos_y = 0;
var colors = ["cyan", "black", "blue", "yellow", "orange", "purple", "aqua", "Chartreuse", "DeepSkyBlue"];
var red = "red";

var square = [];
var triangle = [];
var star = [];
var moon = [];
var hexagons = [];
var octogons = [];
var keys = [];


var layer0 = [];
var layer1 = [];
var layer2 = [];
var layer3 = [];
var layer4 = [];
var layer5 = [];
var layer6 = [];
var layer7 = [];
var layer8 = [];

spawn_amount = 500;

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})()

window.addEventListener("keydown", function (e)
{
    console.log(e.keyCode);
 		keys[e.keyCode] = true;
});

	window.addEventListener("keyup", function (e)
	{
  		keys[e.keyCode] = false;
  		if (e.keyCode === 65 || e.keyCode === 68)
  		{
  			vel_x = 0;
  		}
  		if (e.keyCode === 87 || e.keyCode === 83)
  		{
  			vel_y = 0;
  		}
	});

function update()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw()
{	
  draw_layer0(layer0, map_pos_x, map_pos_y);
  draw_layer1(layer1, map_pos_x, map_pos_y);
  draw_layer2(layer2, map_pos_x, map_pos_y);
  draw_layer3(layer3, map_pos_x, map_pos_y);
  whatKey();
  move_player(vel_x, vel_y);
  spawn_shapes();
  spawn_player_items();
}

function gameloop()
{
 	update();
 	draw();
 	requestAnimationFrame(gameloop);
}

onload = function() 
{
  win_width = canvas.width;
  win_height = canvas.height;
  populate_layer0();
  populate_layer1();
  populate_layer2();
  populate_layer3(layer3);
  populate_layer3(layer3);
  populate_layer3(layer3);
  populate_layer3(layer3);
  populate_layer3(layer3);
  populate_layer3(layer3);

  initialize_shapes();
  player = new player(100, 1, 1);
	gameloop();
};