function skill_tree()
{
  this.attack = 0;
  this.attack_xp = 0;
  this.strength = 0;
  this.strength_xp = 0;
  this.defence = 0;
  this.defence_xp = 0;
  this.mining = 0;
  this.mining_xp = 0;
  this.smithing = 0;
  this.smithing_xp = 0;
  this.crafting = 0;
  this.crafting_xp = 0;
  this.farming = 0;
  this.farming_xp = 0;
  this.tree_cutting = 0;
  this.tree_cutting_xp = 0;
  this.running = 0;
  this.running_xp = 0;
  this.trap_setting;
  this.trap_setting_xp = 0;
  this.magic = 0;
  this.magic_xp = 0;
  this.ranging;
  this.ranging_xp = 0;
  this.building = 0;
  this.building_xp = 0;
  this.brewing;
  this.brewing_xp = 0;
}

function player(health, strength, defence, p_image)
{
  this.health = health;
  this.strength = strength;
  this.defence = defence;
  this.can_move  = true;
  this.build_index = 0;
  this.image = new Image();
  this.image.src = p_image;
  this.weapon = "none";
  this.shield = null;
  this.helm = null;
  this.shirt = null;
  this.pants = null;
  this.boots = null;
  this.inventory = [];
  this.skills = new skill_tree();
  this.walls = [];
  this.squares = [];
  this.stars = [];
  this.building_material = [this.squares, this.triangles];
  this.bullets = [];
  this.deaths = 0;
}

function animation(atlas_pos_x, atlas_pos_y, size_x, size_y, map_pos_x, map_pos_y, x, y, type)
{
  this.size_x = size_x;
  this.size_y = size_y;
  this.atlas_pos_y = atlas_pos_y;
  this.atlas_pos_x = atlas_pos_x;
  this.map_pos_x = map_pos_x;
  this.map_pos_y = map_pos_y;
  this.map_size_x = x;
  this.map_size_y = y;
  this.timer = 0;
  this.type = type;
}

function waypt(x, y)
{
  this.x = x;
  this.y = y;
}

function arrow(x, y, vel_x = 0, vel_y = 0)
{
  this.x = x;
  this.y = y;
  this.vel_x = vel_x;
  this.vel_y = vel_y;
  this.timer = 0;
  this.damage = random_int(1, 4);
}

function enemy(type, health, strength, defence, x, y, item_dropped)
{
    this.type = type;
    this.health = health;
    this.strength = strength;
    this.defence = defence;
    this.kill_xp = (health + strength) * defence;
    this.xp = this.kill_xp / 10;
    this.waypoints = [];
    this.waypt_index = 0;
    this.x = x;
    this.y = y;
    this.item_dropped = item_dropped;
    this.img_timer = 0;
    this.img_index = 0;
    this.up = [];
    this.down = [];
    this.left = [];
    this.right = [];
    this.attack_up = [];
    this.attack_down = [];
    this.attack_left = [];
    this.attack_right = [];
    this.ammo = [];
    this.fired_ammo = [];
    this.archer_power = 0;
    this.shooting_timer = 0;
    this.size_x = 64;
    this.size_y = 64;
    this.gold = random_int(25, 100);
}

function layer_obj(id, pos_x, pos_y, size)
{
  this.id = id;
  this.pos_x = pos_x;
  this.pos_y = pos_y;
  this.size = size;
}

function castle_piece(src, atlas_pos_x, atlas_pos_y, size_x, size_y, map_pos_x, map_pos_y, x, y, type)
{
  this.image = new Image();
  this.img_src = src;
  this.size_x = size_x;
  this.size_y = size_y;
  this.atlas_pos_y = atlas_pos_y;
  this.atlas_pos_x = atlas_pos_x;
  this.map_pos_x = map_pos_x;
  this.map_pos_y = map_pos_y;
  this.map_size_x = x;
  this.map_size_y = y;
  this.type = type;
}

function crates(src, atlas_pos_x, atlas_pos_y, size_x, size_y, map_pos_x, map_pos_y, x, y)
{
  this.size_x = size_x;
  this.size_y = size_y;
  this.atlas_pos_y = atlas_pos_y;
  this.atlas_pos_x = atlas_pos_x;
  this.map_pos_x = map_pos_x;
  this.map_pos_y = map_pos_y;
  this.map_size_x = x;
  this.map_size_y = y;
  this.hp = random_int(45, 100);

}

function anvil(src, atlas_pos_x, atlas_pos_y, size_x, size_y, map_pos_x, map_pos_y, x, y)
{
  this.size_x = size_x;
  this.size_y = size_y;
  this.atlas_pos_y = atlas_pos_y;
  this.atlas_pos_x = atlas_pos_x;
  this.map_pos_x = map_pos_x;
  this.map_pos_y = map_pos_y;
  this.map_size_x = x;
  this.map_size_y = y;
  this.hp = random_int(45, 100);
}


function mineral(rocktype, image_s, atlas_pos_x, atlas_pos_y)
{
  this.rock_type = rocktype;
  this.atlas_pos_x = atlas_pos_x;
  this.atlas_pos_y = atlas_pos_y;
  this.size = 32;
  this.image = new Image();
  this.image.src = image_s;
}

function rocks(health, strength, image_s, x, y, rocktype, id, atlas_pos_x, atlas_pos_y)
{
  this.health = health;
  this.strength = strength;
  this.image = new Image;
  this.image.src = image_s;
  this.x = x;
  this.y = y;
  this.rocktype = rocktype;
  this.mineral = new mineral(rocktype, mineral_srcs, atlas_pos_x, atlas_pos_y);
  this.id = id;
}

function logs(logtype, image_s)
{
  this.log_type = logtype;
  this.image = new Image();
  this.image.src = image_s;
}

function tree(health, strength, image_s, x, y, logtype, atlas_pos, id)
{
  this.health = health;
  this.strength = strength;
  this.image = new Image;
  this.image.src = image_s;
  this.x = x;
  this.y = y;
  this.logtype = logtype;
  this.logs = new logs(logtype, log_srcs[id]);
  this.atlas_pos = atlas_pos;
  this.id = id;
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