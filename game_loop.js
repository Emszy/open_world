var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var player;
var player_x = canvas.width / 2;
var player_y = canvas.height / 2;
var vel_x = 0;
var vel_y = 0;
var maxSpeed = 8;
var total_map_width = 150 * 128 - 100;
var total_map_height = 150 * 128 - 100;
var win_width;
var win_height;
var map_pos_x = 0;
var map_pos_y = 0;
var colors = ["cyan", "black", "blue", "yellow", "orange", "purple", "aqua", "Chartreuse", "DeepSkyBlue"];
var red = "red";

var square = [];
var star = [];

var trees = [];
var tree_srcs = [];
var log_srcs = [];

var rock = [];
var rock_srcs = [];
var mineral_srcs;

var castles = [];
var crate = [];
var anvils = [];

var castle_image = new Image();
var castle_src;
var layer0 = [];
var layer1 = [];
var layer2 = [];
var layer3 = [];
var game_map = [];

var keys = [];

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
  draw_layer0(game_map, map_pos_x, map_pos_y);
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
  consolidate_layers();

  initialize_shapes();
  player = new player(100, 1, 1, "sprites/character/player/base/dwarf_f.png");
	gameloop();
};


castle_src = "sprites/buildings/Castle2.png";
castle_image.src = castle_src;


tree_srcs[0] = "sprites/resources/trees/green trees.png";
tree_srcs[1] = "sprites/resources/trees/autumn 2.png";
tree_srcs[2] = "sprites/resources/trees/brown trees 2.png";
tree_srcs[3] = "sprites/resources/trees/cherry_blossom_trees.png";
tree_srcs[4] = "sprites/resources/trees/blue trees.png";
tree_srcs[5] = "sprites/resources/trees/yellow.png";

log_srcs[0] = "sprites/item/logs/logs.png";
log_srcs[1] = "sprites/item/logs/maple_logs.png";
log_srcs[2] = "sprites/item/logs/oak_logs.png";
log_srcs[3] = "sprites/item/logs/cherry_logs.png";
log_srcs[4] = "sprites/item/logs/magic_logs.png";
log_srcs[5] = "sprites/item/logs/special_logs.png";


rock_srcs[0] = "sprites/resources/rocks/CrystalSprites/amethyst.png";
rock_srcs[1] = "sprites/resources/rocks/CrystalSprites/fluorite.png";
rock_srcs[2] = "sprites/resources/rocks/CrystalSprites/pyrite.png";
rock_srcs[3] = "sprites/resources/rocks/CrystalSprites/quartz_s.png";
rock_srcs[4] = "sprites/resources/rocks/CrystalSprites/garnet.png";
rock_srcs[5] = "sprites/resources/rocks/CrystalSprites/b_tourmaline.png";
rock_srcs[6] = "sprites/resources/rocks/CrystalSprites/hematite.png";
rock_srcs[7] = "sprites/resources/rocks/CrystalSprites/ruby.png";

mineral_srcs = "sprites/item/roguelikeitems.png";


