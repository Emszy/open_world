function get_slope(enemy)
{
    var slope = [];
    tx = player_x + 16 - enemy.x;
    ty = player_y + 16 - enemy.y;
    dist = Math.sqrt(tx*tx+ty*ty);
    slope[0] = (tx / dist) * 20;
    slope[1] = (ty / dist) * 20;
    return (slope);
}

function enemy_waypts(enemy)
{

   var dir = 0;

    if (enemy && enemy.x < enemy.waypoints[enemy.waypt_index].x)
      {
        dir = 1;
      }
      else if (enemy && enemy.x > enemy.waypoints[enemy.waypt_index].x)
      {
        dir = 2
      }
      else if (enemy && enemy.y < enemy.waypoints[enemy.waypt_index].y)
      {
         dir = 3;
      }
      else if (enemy && enemy.y > enemy.waypoints[enemy.waypt_index].y)
      {
        dir = 4;
      }
      if (enemy && enemy.x == enemy.waypoints[enemy.waypt_index].x && enemy.y == enemy.waypoints[enemy.waypt_index].y)
      {
        enemy.waypt_index++;
        if (enemy && enemy.waypt_index > enemy.waypoints.length - 1)
        {
          enemy.waypt_index = 0;
        }
      }
      return (dir)

}

function change_image_index(enemy)
{

// for change in animation framerate
  enemy.img_timer += random_int(1, 4);
  
  if (enemy.img_timer > 75)
  {
    enemy.img_timer = 0;
    enemy.img_index++;
    if (enemy.img_index > 2)
    {
      enemy.img_index = 0;
    }
  }
}

function enemy_swing(enemy, col, img)
{

  var damage = enemy.strength - player.defence;
  if (damage < 0)
  {
    damage = 0;
  }
    if (col == "left")
    {
      if (enemy.img_index == 2 && enemy.shooting_timer > 40)
      {
        player.health -= damage;
        enemy.shooting_timer = 0;
      }
      context.drawImage(img, enemy.attack_left[enemy.img_index].atlas_pos_x, enemy.attack_left[enemy.img_index].atlas_pos_y, enemy.attack_left[enemy.img_index].size_x, enemy.attack_left[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_left[enemy.img_index].map_size_x, enemy.attack_left[enemy.img_index].map_size_y);
    }
    else if (col == "right")
    {
      if (enemy.img_index == 2 && enemy.shooting_timer > 40)
      {
        player.health -= damage;
        enemy.shooting_timer = 0;
      }
      context.drawImage(img, enemy.attack_right[enemy.img_index].atlas_pos_x, enemy.attack_right[enemy.img_index].atlas_pos_y, enemy.attack_right[enemy.img_index].size_x, enemy.attack_right[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_right[enemy.img_index].map_size_x, enemy.attack_right[enemy.img_index].map_size_y);
    }
    else if (col == "bottom")
    {
      if (enemy.img_index == 2 && enemy.shooting_timer > 40)
      {
        player.health -= damage;
        enemy.shooting_timer = 0;
      }
      context.drawImage(img, enemy.attack_down[enemy.img_index].atlas_pos_x, enemy.attack_down[enemy.img_index].atlas_pos_y, enemy.attack_down[enemy.img_index].size_x, enemy.attack_down[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_down[enemy.img_index].map_size_x, enemy.attack_down[enemy.img_index].map_size_y);
    }
    else if (col == "top")
    {
      if (enemy.img_index == 2 && enemy.shooting_timer > 40)
      {
        player.health -= damage;
        enemy.shooting_timer = 0;
      }
      context.drawImage(img, enemy.attack_up[enemy.img_index].atlas_pos_x, enemy.attack_up[enemy.img_index].atlas_pos_y, enemy.attack_up[enemy.img_index].size_x, enemy.attack_up[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_up[enemy.img_index].map_size_x, enemy.attack_up[enemy.img_index].map_size_y);
    }
}

function enemy_archer_shoot(enemy, col, img)
{
  var slope = [];
  var arrow_img = arrow_img_right;

  slope = get_slope(enemy);
  if (col == "left")
  {
    context.drawImage(img, enemy.attack_left[enemy.img_index].atlas_pos_x, enemy.attack_left[enemy.img_index].atlas_pos_y, enemy.attack_left[enemy.img_index].size_x, enemy.attack_left[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_left[enemy.img_index].map_size_x, enemy.attack_left[enemy.img_index].map_size_y);
    if (enemy.shooting_timer > 20 && enemy.img_index == 2)
    {
      enemy.fired_ammo.push(new arrow(enemy.x + 32, enemy.y + 32, slope[0],  slope[1]));
      enemy.shooting_timer = 0;
    }
    arrow_img = arrow_img_left;
  }
  else if (col == "right")
  {
    context.drawImage(img, enemy.attack_right[enemy.img_index].atlas_pos_x, enemy.attack_right[enemy.img_index].atlas_pos_y, enemy.attack_right[enemy.img_index].size_x, enemy.attack_right[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_right[enemy.img_index].map_size_x, enemy.attack_right[enemy.img_index].map_size_y);
    if (enemy.shooting_timer > 20 && enemy.img_index == 2)
    {
      enemy.fired_ammo.push(new arrow(enemy.x + 32, enemy.y + 32, slope[0],  slope[1]));
      enemy.shooting_timer = 0;
    }
    arrow_img = arrow_img_right;
  }
  else if (col == "bottom")
  {
    context.drawImage(img, enemy.attack_down[enemy.img_index].atlas_pos_x, enemy.attack_down[enemy.img_index].atlas_pos_y, enemy.attack_down[enemy.img_index].size_x, enemy.attack_down[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_down[enemy.img_index].map_size_x, enemy.attack_down[enemy.img_index].map_size_y);
    if (enemy.shooting_timer > 20 && enemy.img_index == 2)
    {
      enemy.fired_ammo.push(new arrow(enemy.x + 32, enemy.y + 32, slope[0], slope[1]));
      enemy.shooting_timer = 0;
    }
    arrow_img = arrow_img_down;
  }
  else if (col == "top")
  {
    context.drawImage(img, enemy.attack_up[enemy.img_index].atlas_pos_x, enemy.attack_up[enemy.img_index].atlas_pos_y, enemy.attack_up[enemy.img_index].size_x, enemy.attack_up[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.attack_up[enemy.img_index].map_size_x, enemy.attack_up[enemy.img_index].map_size_y);
    if (enemy.shooting_timer > 20 && enemy.img_index == 2)
    {
      enemy.fired_ammo.push(new arrow(enemy.x + 32, enemy.y + 32, slope[0], slope[1]));
      enemy.shooting_timer = 0;
    }
    arrow_img = arrow_img_up;
  }
  return (arrow_img)
}

function enemy_walk_image(enemy, dir, col, img)
{
  if (dir == 2 && col == "none")
  {
    enemy.x--;
    context.drawImage(img, enemy.left[enemy.img_index].atlas_pos_x, enemy.left[enemy.img_index].atlas_pos_y, enemy.left[enemy.img_index].size_x, enemy.left[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.left[enemy.img_index].map_size_x, enemy.left[enemy.img_index].map_size_y);
  }
  else if (dir == 1 && col == "none")
  {
    enemy.x++;
    context.drawImage(img, enemy.right[enemy.img_index].atlas_pos_x, enemy.right[enemy.img_index].atlas_pos_y, enemy.right[enemy.img_index].size_x, enemy.right[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.right[enemy.img_index].map_size_x, enemy.right[enemy.img_index].map_size_y);
  }
  else if (dir == 3 && col == "none")
  {
    enemy.y++;
    context.drawImage(img, enemy.down[enemy.img_index].atlas_pos_x, enemy.down[enemy.img_index].atlas_pos_y, enemy.down[enemy.img_index].size_x, enemy.down[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.down[enemy.img_index].map_size_x, enemy.down[enemy.img_index].map_size_y);
  }
  else if (dir == 4 && col == "none")
  {
    enemy.y--;
    context.drawImage(img, enemy.up[enemy.img_index].atlas_pos_x, enemy.up[enemy.img_index].atlas_pos_y, enemy.up[enemy.img_index].size_x, enemy.up[enemy.img_index].size_y, enemy.x + map_pos_x, enemy.y + map_pos_y, enemy.up[enemy.img_index].map_size_x, enemy.up[enemy.img_index].map_size_y);
  }
}

function enemy_arrows(enemy, arrow_img)
{
  var damage;

  damage = 0;
  for (z = 0; z < enemy.fired_ammo.length - 1; z++)
  {
     enemy.fired_ammo[z].x +=  enemy.fired_ammo[z].vel_x;
     enemy.fired_ammo[z].y +=  enemy.fired_ammo[z].vel_y;
     enemy.fired_ammo[z].timer += random_int(1, 4);

     if(enemy.fired_ammo[z].timer > 200)
     {
       (enemy.fired_ammo.splice(z, 1));
     }
     context.drawImage(arrow_img, enemy.fired_ammo[z].x + map_pos_x, enemy.fired_ammo[z].y + map_pos_y, 28, 28);

   if (collision(player_x + 16, player_y + 16, 32, 32, enemy.fired_ammo[z].x, enemy.fired_ammo[z].y, 8, 8) != "none")
   {
    damage = (enemy.fired_ammo[z].damage + enemy.strength + enemy.archer_power) - player.defence;
    if (damage < 0)
    {
      damage = 0;
    }
    player.health -= damage
    enemy.fired_ammo.splice(z, 1);
  }
 }
}


//called in spawn_shapes.js
function spawn_enemies()
{
  var dir = 0;
  var arrow_img = arrow_img_left;
  var enemy_image = armor_bandit_img;

  for(var x = 0; x < enemies.length; x++)
  {
    if (enemies[x] && enemies[x].x - player_x < 750 && enemies[x].y - player_y < 750 && player_x - enemies[x].x < 750 && player_y - enemies[x].y < 750)
    {
      enemies[x].shooting_timer++;
      dir = enemy_waypts(enemies[x]);
      change_image_index(enemies[x]);

      if (enemies[x].type == "bandit")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x, enemies[x].y, 64, 64, 1);
        enemy_swing(enemies[x], col, armor_bandit_img);
        enemy_image = armor_bandit_img;
      }
      else if (enemies[x].type == "bandit archer")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x - 512, enemies[x].y - 512, 1024, 1024, 1);
        arrow_img = enemy_archer_shoot(enemies[x], col, armor_bandit_img);
        enemy_image = armor_bandit_img;
      }
      if (enemies[x].type == "knight")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x, enemies[x].y, 64, 64, 1);
        enemy_swing(enemies[x], col, dark_knight_img);
        enemy_image = dark_knight_img;
      }
      else if (enemies[x].type == "knight archer")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x - 512, enemies[x].y - 512, 1024, 1024, 1);
        arrow_img = enemy_archer_shoot(enemies[x], col, dark_knight_img);
        enemy_image = dark_knight_img;
      }
      else if (enemies[x].type == "forest assassin")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x, enemies[x].y, 64, 64, 1);
        enemy_swing(enemies[x], col, forest_assassin_img);
        enemy_image = forest_assassin_img;
      }
      else if (enemies[x].type == "forest archer")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x - 512, enemies[x].y - 512, 1024, 1024, 1);
        arrow_img = enemy_archer_shoot(enemies[x], col, forest_assassin_img);
        enemy_image = forest_assassin_img;
      }
      else if (enemies[x].type == "armored")
      {
        col = collision(player_x, player_y, 64, 64, enemies[x].x, enemies[x].y, 64, 64, 1);
        enemy_swing(enemies[x], col, armored_img);
        enemy_image = armored_img;
      }
      enemy_walk_image(enemies[x], dir, col, enemy_image);
      enemy_arrows(enemies[x], arrow_img);
    }
  }
}
