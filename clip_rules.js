function collision(wall_x, wall_y, w = 64, h = 64, walkthrough = 0) 
{
  var dx = (player_x + 64 / 2) - (wall_x + w / 2);
  var dy = (player_y + 64 / 2) - (wall_y + h / 2);
  var width = (64 + w) / 2;
  var height = (64 + h) / 2;
  var crossWidth = width * dy;
  var crossHeight = height * dx;
  var collision='none';
  //
  if(Math.abs(dx) <= width && Math.abs(dy) <= height)
  {
    if(crossWidth > crossHeight)
    {
      collision = ( crossWidth > (-crossHeight)) ? 'bottom' : 'left';
    }
    else
    {
      collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
    }
  }
  if(walkthrough == 0)
  {
    if (collision == "bottom")
    {
        map_pos_y -= vel_y;
        player_y += vel_y;
        if(keys[83])
        {
          map_pos_y += vel_y;
          player_y -= vel_y;
        }
    }
    if (collision == "top")
    {
        map_pos_y -= vel_y;
        player_y += vel_y;
        if(keys[87])
        {
          map_pos_y += vel_y;
          player_y -= vel_y;
        }
    }
    if (collision == "left")
    {
        map_pos_x += vel_x;
        player_x -= vel_x;
        if(keys[65])
        {
          map_pos_x -= vel_x;
          player_x += vel_x;
        }
    }
    if (collision == "right")
    {
        map_pos_x += vel_x;
        player_x -= vel_x;
        if(keys[68])
        {
          map_pos_x -= vel_x;
          player_x += vel_x;
        }
    }
  }
  return (collision);
}


function wall_clip()
{
  var x = 0;
   while (player.walls[x])
    {
      collision(player.walls[x].x, player.walls[x].y, 2, 2);
      x++;
    }
}

function bullet_hit_wall()
{
  var x = 0;
  var y = 0;
   while (player.walls[x])
   {
    y = 0;
    while(player.bullets[y])
    {      
      if (player.bullets[y] && player.bullets[y].x > player.walls[x].x - 10 && player.bullets[y].x < player.walls[x].x - 5 && player.bullets[y].y > player.walls[x].y - 35 && player.bullets[y].y < player.walls[x].y + 35 )
        {
          player.bullets[y].x -= 5;
          player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].x > player.walls[x].x + 10 && player.bullets[y].x < player.walls[x].x + 20 && player.bullets[y].y > player.walls[x].y - 35 && player.bullets[y].y < player.walls[x].y + 35 )
        {
            player.bullets[y].x += 5;
            player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].y > player.walls[x].y + 10 && player.bullets[y].y < player.walls[x].y + 20 && player.bullets[y].x > player.walls[x].x - 35 && player.bullets[y].x < player.walls[x].x + 35)
        {
            player.bullets[y].y += 5;
            player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].y < player.walls[x].y - 10 && player.bullets[y].y > player.walls[x].y - 20 && player.bullets[y].x > player.walls[x].x - 35 && player.bullets[y].x < player.walls[x].x + 35)
        {
            player.bullets[y].y -= 5;
            player.bullets[y].timer++;
        }
        y++;
    }
    x++;
  }

}