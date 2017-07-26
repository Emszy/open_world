function place_wall()
{
  if (keys[32])
  {
    if(player.building_material[player.build_index][0])
    {
      player.walls.push(player.squares.shift());
      player.walls[player.walls.length - 1].color = red;
      player.walls[player.walls.length - 1].x = player_x + 32;
      player.walls[player.walls.length - 1].y = player_y + 32;
    }
    keys[32] = false;
  }
}

function fire_bullet()
{
  if (keys[39])
  {
    if(player.stars[0])
    {
      player.bullets.push(player.stars.shift());
      player.bullets[player.bullets.length - 1].color = red;
      player.bullets[player.bullets.length - 1].x = player_x + 32;
      player.bullets[player.bullets.length - 1].y = player_y + 32;
      player.bullets[player.bullets.length - 1].vel_x = 5;
      keys[39] = false;
  
    }
  }
  if (keys[37])
  {
    if(player.stars[0])
    {
      player.bullets.push(player.stars.shift());
      player.bullets[player.bullets.length - 1].color = red;
      player.bullets[player.bullets.length - 1].x = player_x + 32;
      player.bullets[player.bullets.length - 1].y = player_y + 32;
      player.bullets[player.bullets.length - 1].vel_x = -5;
      keys[37] = false;
  
    }
  }
  if (keys[38])
  {
    if(player.stars[0])
    {
      player.bullets.push(player.stars.shift());
      player.bullets[player.bullets.length - 1].color = red;
      player.bullets[player.bullets.length - 1].x = player_x + 32;
      player.bullets[player.bullets.length - 1].y = player_y + 32;
      player.bullets[player.bullets.length - 1].vel_y = -5;
      keys[38] = false;
    }
  }
   if (keys[40])
  {
    if(player.stars[0])
    {
      player.bullets.push(player.stars.shift());
      player.bullets[player.bullets.length - 1].color = red;
      player.bullets[player.bullets.length - 1].x = player_x + 32;
      player.bullets[player.bullets.length - 1].y = player_y + 32;
      player.bullets[player.bullets.length - 1].vel_y = 5;
      keys[40] = false;
    }
  }
}

function change_velocity()
{
  if (keys[65]) {
    if (vel_x > 0)
    {
        vel_x = 0;
    }

    //vel_x = -10;
  if (vel_x > -maxSpeed) {
      vel_x -= 0.3;
    }
  }

  if (keys[68]) {

    if (vel_x < 0)
        {
            vel_x = 0;
        }
    //vel_x = 10;
    if (vel_x < maxSpeed) {
      vel_x += 0.3;
    }
  }
  if (keys[87]) {
    if (vel_y < 0)
        {
            vel_y = 0;
        }
    if (vel_y < maxSpeed) {
      vel_y += 0.3;
    }
  }
  if (keys[83]) 
  {
    if (vel_y > 0)
    {
      vel_y = 0;
    }
    if (vel_y > -maxSpeed){
      vel_y -= 0.3;
    }
  }

}


function whatKey()
{
  change_velocity();
  place_wall();
  fire_bullet();
}


function move_check(dx, dy)
{
  if (dy > 0)
     {
      if (player_y - dy > 0)
      {
        map_pos_y += dy;
        player_y -= dy;
      } 
    }
    if (dy < 0)
    {
      if (player_y + dy < total_map_height)
      {
        map_pos_y += dy;
        player_y -= dy;
      }
     }
    if (dx < 0)
    {
     if (player_x - dx > 0)
     {
        map_pos_x -= dx;
        player_x += dx;
     }     
    }
    if (dx > 0)
    {
      if (player_x + dx < total_map_width)
      {
          map_pos_x -= dx;
          player_x += dx;
      }
     }
}
function move_player(vel_x, vel_y)
{
    var dy = vel_y;
    var dx = vel_x;
    wall_clip();
    move_check(dx, dy);
}

