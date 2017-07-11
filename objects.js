function player(health, strength, defence)
{
  this.health = health;
  this.strength = strength;
  this.defence = defence;
  this.can_move  = true;
  this.build_index = 0;
  this.walls = [];
  this.squares = [];
  this.stars = [];
  this.moons = [];
  this.triangles = [];
  this.hexagons = [];
  this.octogons = [];
  this.building_material = [this.squares, this.triangles];
  this.bullets = [];
}

function enemy(health, strength, defence, x, y, item_dropped, color)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.x = x;
    this.y = y;
    this.item_dropped = item_dropped;
    this.color = color;
}

function stars (health, strength, defence, x, y, item_dropped, color)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.x = x;
    this.y = y;
    this.vel_x = 0;
    this.vel_y = 0;
    this.timer = 0;
    this.item_dropped = item_dropped;
    this.color = color;
}

function squares(health, strength, defence, x, y, item_dropped, color)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.x = x;
    this.y = y;
    this.hit_x = 12;
    this.hit_y = 12;
    this.item_dropped = item_dropped;
    this.color = color;
}

function triangles(health, strength, defence, x, y, item_dropped, color)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 25;
    this.hit_x = Math.round((this.width / 2));
    this.hit_y = 12;
    this.item_dropped = item_dropped;
    this.color = color;
}

function polygon(health, strength, defence, x, y, item_dropped, color, sides)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.sides = sides;
    this.size = 15;
    this.x = x;
    this.y = y;
    this.item_dropped = item_dropped;
    this.color = color;
}

function moons(health, strength, defence, x, y, item_dropped, color)
{
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.x = x;
    this.y = y;
    this.item_dropped = item_dropped;
    this.color = color;
}
